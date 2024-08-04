import react from 'react';
import {useEffect, useState} from 'react';
import Layout from '../Components/Layout';
import {Helmet} from "react-helmet-async";

import {useLocation, useNavigate} from 'react-router-dom';

const CheckoutConfirmation = ()=>{

    const backgroundImageCss = {
            backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719775094/checkout-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "50vh"

    }

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        if(location.state == null){
            navigate('/packages');
        }
    }, []);

    if(location.state == null)
        return null;


    const {tourPackage, orderId, departureLocation, pax, departureDate} = location.state;


    return (
        <Layout>

            <Helmet>
                <title>Checkout</title>
                <meta name="description" content="This is about page"/>
            </Helmet>

             <main className="w-full flex justify-center items-end" style={backgroundImageCss}>
                <div className="w-[80%] flex justify-center py-8">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl text-white font-bold">Confirmation</h1>
                </div>
            </main>


            <main className="w-full flex flex-col items-center justify-center py-12 font-arial">

                <div className="w-[90%] min-[900px]:w-[80%] flex flex-col">
                    <p className="w-[90%] md:w-[60%] text-green-500 text-xl text-center mx-auto p-8 bg-gray-200">Your order is completed and received, and a confirmation email was sent to you. You will pay the full amount later. Thank you!</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 py-16 [&>div]:text-center [&>div]:py-8 md:[&>div]:py-0 [&>div]:border-2 md:[&>div]:border-0 md:[&>div]:border-r-2 [&>div]:border-r-gray-300 text-xl lg:text-2xl text-[#2F6080]">
                        <div>
                            <span className="font-bold">Order Number</span>
                            <br/>
                            <span>#{orderId}</span>
                        </div>
                        <div>
                            <span className="font-bold">Date</span>
                            <br/>
                            <span>{new Date(departureDate).toLocaleString("en-IN", {year: 'numeric', month: 'long', day: 'numeric'})}</span>
                        </div>
                        <div>
                            <span className="font-bold">Total Amount</span>
                            <br/>
                            <span>₹{tourPackage.price*pax}</span>
                        </div>
                        <div className="md:!border-r-0">
                            <span className="font-bold">Payment Method</span>
                            <br/>
                            <span>Play Later</span>
                        </div>
                    </div>
                </div>

                <div className="w-[90%] md:w-[60%] flex flex-col text-xl lg:text-2xl text-[#2F6080]">
                    <ul className="px-4 [&>li]:my-2">
                        <li className="!mb-4"><span className="font-bold">{tourPackage.destination}, {tourPackage.country}</span></li>
                        <li><span className="font-bold">Date: </span>{new Date(departureDate).toLocaleString("en-IN", {year: 'numeric', month: 'long', day: 'numeric'})}</li>
                        <li><span className="font-bold">Duration: </span>{tourPackage.duration.day} Days / {tourPackage.duration.night} Nights</li>
                        <li><span className="font-bold">Departure From: </span>{departureLocation}</li>
                        <li><span className="font-bold">No. of {tourPackage.paxType}: </span>{pax}</li>
                    </ul>

                    <div className="w-full text-right text-gray-600 p-8 bg-gray-200 mt-12 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] font-bold [&>span]:text-black ">
                        Total Amount : <span>₹{tourPackage.price*pax}</span> 
                        <br/>
                        Amount Paid : <span>₹0</span> 
                        <br/>
                        Amount Due : <span className="!text-red-500">₹{tourPackage.price*pax}</span> 
                    </div>
                </div>

            </main>
           
        </Layout>
    );
}

export default CheckoutConfirmation; 
