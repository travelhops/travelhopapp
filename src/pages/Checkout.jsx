import react from 'react';
import {useState, useEffect} from 'react';
import Layout from '../Components/Layout';
import {useLocation, useNavigate} from 'react-router-dom';
import {Helmet} from "react-helmet-async";


import axios from 'axios';

const Checkout = ()=>{

    const backgroundImageCss = {
            backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719775094/checkout-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "50vh"

    }

    const API_URL = process.env.API_URL;

    const location = useLocation();
    const navigate = useNavigate();



    useEffect(()=>{
        if(location.state == null){
            navigate('/packages');
        }
    }, []);

    if(location.state == null)
        return null;


    const {tourPackage, date, departureLocation, pax} = location.state;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [agreeCheckbox, setAgreeCheckbox] = useState(false);

    const [errors, setErrors] = useState([]);


    const handleFnameChange = (event)=>{
        const temp = event.target.value;
        setFirstName(temp);
    }

    const handleLnameChange = (event)=>{
        const temp = event.target.value;
        setLastName(temp);
    }

    const handleEmailChange = (event)=>{
        const temp = event.target.value;
        setEmail(temp);
    }

    const handleContactChange = (event)=>{
        const temp = event.target.value;
        setContact(temp);
    }

    const handleAgreeCheckboxChange = (event)=>{
        setAgreeCheckbox(event.target.checked);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            contact: contact,
            departureDate: date,
            departureLocation: departureLocation,
            packageId: tourPackage._id,
            totalAmount: pax*tourPackage.price,
            paxSize: pax
        }

        axios.post(API_URL+'/api/createOrder', data).then(res=>{
            if(res.data.success){
                navigate('/checkout/confirmation', {
                    state: {
                        orderId: res.data.orderId, 
                        departureDate: date, 
                        departureLocation: departureLocation, 
                        pax: pax, 
                        tourPackage: {
                            destination: tourPackage.destination,
                            country: tourPackage.country,
                            duration: tourPackage.duration,
                            paxType: tourPackage.paxType,
                            price: tourPackage.price

                        } 
                    }
                });
            }
            else{
                setErrors([{path:"Server Error ", msg: "Somthing went wrong" }]);
            }

            if(res.data.errors){
                setErrors(res.data.errors);
            }
        });

    }


    return (
        <Layout>

            <Helmet>
                <title>Checkout</title>
                <meta name="description" content="This is about page"/>
            </Helmet>

            <main className="w-full flex justify-center items-end" style={backgroundImageCss}>
                <div className="w-[80%] flex justify-center py-8">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl text-white font-bold">Checkout</h1>
                </div>
            </main>

            <main className="w-full py-12 font-arial">
                <div className="mx-auto w-[90%] flex flex-col md:flex-row">

                    <div className="flex-[0_0_60%] text-[#2F6080]">
                        <h2 className="text-3xl lg:text-4xl py-2 font-medium">Checkout</h2>
                        <span className="text-2xl lg:text-3xl">Order #223345-987654 </span>
                        
                        <hr className="my-4 border border-solid border-gray-300"/>

                        <div className="flex py-4 flex-col md:flex-row">
                            <img className="w-full md:w-56 xl:w-80 object-cover aspect-auto md:aspect-square" style={{}} src="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1714766891/bali.jpg" alt="" />
                            <ul className="text-xl lg:text-2xl px-4 [&>li]:my-2">
                                <li className="!mb-4"><span className="font-bold">{tourPackage.destination}, {tourPackage.country}</span></li>
                                <li><span className="font-bold">Date: </span>{new Date(date).toLocaleString("en-IN", {year: 'numeric', month: 'long', day: 'numeric'})}</li>
                                <li><span className="font-bold">Duration: </span>{tourPackage.duration.day} Days / {tourPackage.duration.night} Nights</li>
                                <li><span className="font-bold">Departure From: </span>{departureLocation}</li>
                                <li><span className="font-bold capitalize">No. of {tourPackage.paxType}: </span>{pax}</li>
                                <li className="mt-4 text-red-600 font-semibold"><span className="font-bold text-gray-400">Total Amount &nbsp;</span>₹{pax*tourPackage.price}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex-[0_0_40%] p-4 md:p-8 border-[1px] border-gray-400 shadow-2xl">

                        <form method="POST" onSubmit={handleSubmit} className="flex flex-col text-[#2F6080] [&>input]:w-full [&>input]:text-lg md:[&>input]:text-xl [&>input]:p-2 md:[&>input]:p-4 [&>input]:mb-2 [&>input]:border-[1px] [&>input]:focus:ring-0 [&>input]:outline-none">

                            <h2 className="text-3xl lg:text-4xl font-medium mx-auto">Contact Information</h2>

                            <hr className="my-4 border border-solid border-gray-300"/>
                            
                            <input type="text" placeholder="First Name" name="firstName" onChange={handleFnameChange} required/>
                            <input type="text" placeholder="Last Name" name="firstName" onChange={handleLnameChange} requried/>
                            <input type="email" placeholder="Email" name="email" onChange={handleEmailChange} required/>
                            <input type="text" placeholder="Contact Number" name="phone" onChange={handleContactChange} required/>

                            <hr className="my-8 border border-solid border-gray-300"/>

                            <div className="flex justify-between text-lg md:text-xl">
                                <span className="font-medium">Payment Method: </span>
                                <span className="p-1 bg-gray-200">Book Now, Pay later</span>
                            </div>
                            
                            <span className="text-sm text-[#4CAF50] py-2">
                                <input type="checkbox" name="terms" onChange={handleAgreeCheckboxChange} required/> 
                                &nbsp; I read and agree to the Terms & Conditions
                            </span>

                            <ul className="text-red-500 py-2">
                                {errors.length > 0?errors.map((error, index)=>{
                                    return (<li className="capitalize" key={index}>{error.path+" "+error.msg}</li>)
                                }):""}
                            </ul>


                            <button className={"light-blue-button w-fit mt-8 text-lg"+ (agreeCheckbox?"":" !bg-gray-600")} disabled={!agreeCheckbox}>Complete My Order</button>
                            
                        </form>
                    </div>
                </div>
            </main>

        </Layout>
    );
}

export default Checkout;
