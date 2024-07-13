import react from 'react';
import AdminPanel from '../../Components/admin/AdminPanel';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';

import FloatingMessage from '../../Components/FloatingMessage';

import axios from 'axios';

const Tours = ()=>{

    const [tours, setTours] = useState([]);
    const [floatingMessage, setFloatingMessage] = useState({});

    const navigate = useNavigate();

    const API_URL = process.env.API_URL;

    const getTours = ()=>{
       axios.get(API_URL+"/api/getPackages").then(res=>{
            setTours(res.data.packages);
        });
    }

    const addTour = ()=>{
        navigate('/admin/tours/create');
    }

    const handleFloatingMessage = (msg, color, time)=>{
        setFloatingMessage({msg: msg, color: color});

        setTimeout(()=>{
            setFloatingMessage({});
        }, time);
    }


    const deleteTour = (event)=>{
        const index = parseInt(event.target.parentNode.parentNode.getAttribute("index"));
        const id = tours[index].id;

        const config = {
            headers: {
                'x-access-token': Cookies.get('token')
            }
        }
        axios.delete(API_URL+"/api/deletePackage/"+id, config).then(res=>{
            if(res.data.success){
                handleFloatingMessage("Tour Deleted", "bg-green-500", 4000);
                
                const newTours = [...tours.slice(0, index), ...tours.slice(index+1, tours.length)];
                setTours(newTours);
            }
            else{
                handleFloatingMessage("Something went wrong", "bg-red-500", 5000);
            }
        });
    }

    useEffect(()=>{
        getTours();
    }, []);


    return (
        <div className="w-full flex">
            <div className="flex-[0_0_20%]">
                <AdminPanel/>
            </div>
            <div className="flex-[0_0_80%] bg-gray-100 py-12">
                <div className="w-[95%] flex justify-between mx-auto py-12">
                    <div className="w-[450px] flex text-xl border-[1px] border-gray-400 rounded-lg">
                        <input className="w-full border-0 outline-none focus:ring-0 p-2 font-light rounded-lg" type="text" name="search" placeholder="search"/>
                        <i className="fa-solid fa-magnifying-glass text-white p-4 rounded-lg bg-[#64CCC5]" aria-hidden></i>
                    </div>
                    <button className="cyan-button !w-fit" onClick={addTour}><i className="fa-solid fa-upload" aria-hidden></i> Add Tour</button>
                </div>

                {Object.keys(floatingMessage).length > 0? <FloatingMessage message={floatingMessage.msg} color={floatingMessage.color} />: ""}

                <div className="w-[95%] mx-auto p-12 bg-white shadow-xl">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Tour Name</th>
                                <th>Price</th>
                                <th>Edit Tour</th>
                                <th>Delete Tour</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tours.length > 0?tours.map((tour, index)=>{
                                return (
                                <tr key={index} index={index}>
                                    <td>{index+1}</td>
                                    <td>{tour.tourName}</td>
                                    <td>₹{tour.price}</td>
                                    <td><button className="green-button">Edit</button></td>
                                    <td><button className="red-button" onClick={deleteTour}>Delete</button></td>
                                </tr>
                                )
                            }):""}

                          </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Tours;
