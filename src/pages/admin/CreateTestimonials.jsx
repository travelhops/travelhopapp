import react from 'react';
import {useEffect, useRef, useState} from 'react';
import StarSelection from '../../Components/admin/StarSelection';
import AdminPanel from '../../Components/admin/AdminPanel';
import FloatingMessage from '../../Components/FloatingMessage';

import Cookies from 'js-cookie';
import axios from 'axios';

const CreateTestimonials = ()=>{

    const starSelection = useRef(null);

    const API_URL = process.env.API_URL;

    const [clientName, setClientName] = useState('');
    const [description, setDescription] = useState('');

    const [floatingMessage, setFloatingMessage] = useState({});

    const getStars = ()=>{
        return starSelection.current.getStars();
    }

    const handleClientNameChange = (event)=>{
        const temp = event.target.value;
        setClientName(temp);
    }

    const handleDescriptionChange = (event)=>{
        const temp = event.target.value;
        setDescription(temp);
    }

    const handleFloatingMessage = (msg, color, time)=>{
        setFloatingMessage({msg: msg, color: color});

        setTimeout(()=>{
            setFloatingMessage({});
        }, time);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();

        const data = {
            clientName: clientName,
            description: description,
            rating: getStars()
        }

        axios.post(API_URL+"/api/createTestimonial", data, {
            headers: {
                'x-access-token': Cookies.get('token')
            }
        }).then(res=>{
            if(res.data.success){
                handleFloatingMessage("New Testimonial Create", "bg-green-400", 4000);
            }
            else{
                handleFloatingMessage("Something wrong occured", "bg-red-500", 4000);
            }
        });
    }



    return (
        <div className="w-full flex">
            <div className="flex-[0_0_20%]">
                <AdminPanel/>
            </div>

            {Object.keys(floatingMessage).length > 0?<FloatingMessage message={floatingMessage.msg} color={floatingMessage.color} />: ''}

            <div className="flex-[0_0_80%] w-full bg-gray-100 py-12">
                <form className="flex p-8 text-xl" onSubmit={handleSubmit} method="POST">
                    <div className="adminSideForm">
                        <label className="mr-8" htmlFor="clientName">Client Name</label>
                        <input type="text" id="clientName" name="clientName" placeholder="Client Name" onChange={handleClientNameChange}/>

                        <label className="mr-8" htmlFor="rating">Ratings</label>
                        <StarSelection ref={starSelection} id={0}/>
                        <label className="mr-8" htmlFor="reviews">Reviews</label>

                        <textarea id="reviews" rows="5" placeholder="Description..." onChange={handleDescriptionChange}></textarea>
                        <span></span>
                        <button className="green-button">Add Testimonial</button>
                    </div>
                </form>
            </div>
        </div>
 
    );
}

export default CreateTestimonials;
