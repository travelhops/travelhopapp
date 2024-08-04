import react from 'react';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import AdminPanel from '../../Components/admin/AdminPanel';
import FloatingMessage from '../../Components/FloatingMessage';

import Cookies from 'js-cookie';
import axios from 'axios';



const Booking = ()=>{

    const API_URL = process.env.API_URL;

    const navigate = useNavigate();

    const [orders, setOrders] = useState([]);
    const [floatingMessage, setFloatingMessage] = useState({});

    const handleFloatingMessage = (msg, color, time)=>{
        setFloatingMessage({msg: msg, color: color});

        setTimeout(()=>{
            setFloatingMessage({});
        }, time);
    }

    const getOrders = ()=>{
        axios.get(API_URL+'/api/getOrders', {
            headers: {
                'x-access-token': Cookies.get('token')
            }
        }).then(res=>{
            if(res.data.orders){
                setOrders(res.data.orders);
            }
        });
    }

    const viewOrder = (orderId)=>{
        navigate('/admin/booking/'+orderId+'/view');
    }

    const deleteOrder = (orderId, index)=>{

        axios.delete(API_URL+"/api/deleteOrder/"+orderId, {
            headers: {
                'x-access-token': Cookies.get('token')
            }
        }).then(res=>{
            if(res.data.success){
                handleFloatingMessage("Order Deleted", "bg-green-500", 4000);
                const newOrders = [...orders.slice(0, index), ...orders.slice(index+1, orders.length)];
                setOrders(newOrders);

            }
            else{
                handleFloatingMessage("Something went wrong", "bg-red-500", 5000);
            }
        })
    }

    useEffect(()=>{
        getOrders();
    }, []);



    return (
        <div className="w-full flex">
            <div className="flex-[0_0_20%]">
                <AdminPanel/>
            </div>


            {Object.keys(floatingMessage).length > 0? <FloatingMessage message={floatingMessage.msg} color={floatingMessage.color} />: ""}

            <div className="flex-[0_0_80%] bg-gray-100 py-12">
                <div className="w-[95%] mx-auto p-12 bg-white shadow-xl">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Order No.</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Contact No.</th>
                                <th>Travel Date</th>
                                <th>View</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0?
                                orders.map((order, index)=>{
                                    return (
                                        <tr className="[&>td:first-child]:text-[#2F6080]" key={index}>
                                            <td>#{order._id}</td>
                                            <td>{order.travelerId.firstName}</td>
                                            <td>{order.travelerId.lastName}</td>
                                            <td>{order.travelerId.contact}</td>
                                            <td>{new Date(order.departureDate).toLocaleString('en-IN', {day: 'numeric', month: 'long', year: 'numeric'})}</td>
                                            <td><button className="yello-button !text-gray-700" onClick={()=>{viewOrder(order._id)}}>View</button></td>
                                            <td><button className="red-button" onClick={()=>{deleteOrder(order._id, index)}}>Delete</button></td>
                                        </tr>
                                    );
                                }):""
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}


export default Booking;
