import react from 'react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import AdminPanel from '../../Components/admin/AdminPanel';

import axios from 'axios';
import Cookies from 'js-cookie';

const ViewBooking = ()=>{

    const {slug} = useParams();
    const API_URL = process.env.API_URL;

    const [order, setOrder] = useState({});

    const getOrder = ()=>{
        axios.get(API_URL+'/api/getOrder/'+slug, {
            headers: {
                'x-access-token': Cookies.get('token')
            }
        }).then(res=>{
            if(res.data.order){
                setOrder(res.data.order);
            }
        });
    }

    useEffect(()=>{
        getOrder();
    }, []);

    return (
        <div className="w-full flex">
            <div className="flex-[0_0_20%]">
                <AdminPanel/>
            </div>

            <div className="flex-[0_0_80%] bg-gray-100 py-12">
                <div className="w-[95%] flex justify-center gap-64 mx-auto p-12 bg-white shadow-xl">
                    <div className="flex flex-col">
                        <h2 className="uppercase text-3xl">Order Status</h2>
                        <hr className="my-3 border border-solid border-gray-300"/>
                        <div className="flex text-xl [&>ul]:px-2">
                            <ul className="text-gray-700 [&>li]:py-2">
                                <li>Order Number: </li>
                                <li>Booking Date: </li>
                                <li>Tour: </li>
                                <li>Travel Date: </li>
                                <li>From: </li>
                                <li className="capitalize">No. of {Object.keys(order).length > 0?order.packageId?order.packageId.paxType:"Person":"Person"}: </li>
                            </ul>

                                {Object.keys(order).length > 0?
                                    <ul className="text-[#2F6080] [&>li]:py-2">
                                        <li>#{order._id}</li>
                                        <li>{new Date(order.bookingDate).toLocaleString("en-IN", {day: 'numeric', month: 'long', year: 'numeric'})}</li>
                                        <li>{order.packageId?order.packageId.tourName:"Pacakge deleted"}</li>
                                        <li>{new Date(order.departureDate).toLocaleString("en-IN", {day: 'numeric', month: 'long', year: 'numeric'})}</li>
                                        <li>{order.departureLocation}</li>
                                        <li>{order.paxSize}</li>

                                    </ul>:""
                                }
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="uppercase text-3xl">Traveler Information</h2>
                        <hr className="my-3 border border-solid border-gray-300"/>
                        <div className="flex text-xl [&>ul]:px-2">
                            <ul className="text-gray-700 [&>li]:py-2">
                                <li>First Name: </li>
                                <li>Last Name: </li>
                                <li>Email: </li>
                                <li>Contact No: </li>
                            </ul>

                            {Object.keys(order).length > 0?
                                <ul className="text-[#2F6080] [&>li]:py-2">
                                    <li>{order.travelerId.firstName}</li>
                                    <li>{order.travelerId.firstName}</li>
                                    <li>{order.travelerId.email}</li>
                                    <li>{order.travelerId.contact}</li>
                                </ul>:""
                            }
                        </div>

                        <h2 className="uppercase text-3xl mt-3">Pricing</h2>
                        <hr className="my-3 border border-solid border-gray-300"/>
                        <div className="text-gray-700 text-xl">
                            Total Amount:&nbsp;&nbsp;<span className="text-red-500">₹{Object.keys(order).length > 0?order.totalAmount:'0'}</span>
                        </div>
                            
                    </div>

                </div>
            </div>
        </div>

    )
}

export default ViewBooking;
