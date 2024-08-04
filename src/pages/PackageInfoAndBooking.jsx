import react from 'react';
import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Layout from '../Components/Layout';
import DataLoading from '../Components/DataLoading';

import {Helmet} from "react-helmet-async";

import axios from 'axios';

const PackageInfoAndBooking = ()=>{

    const {slug} = useParams();

    const API_URL = process.env.API_URL;



    const [tourPackage, setTourPackage] = useState({});


    const getPackage = ()=>{
        axios.get(API_URL+"/api/getPackage/"+slug).then(res=>{
            const arr = [];

            res.data.package.tourPlan.forEach((item)=>{
                arr.push(item.split('\n'));
            });

            res.data.package.tourPlan = arr;
            setTourPackage(res.data.package);
        });
    }




    useEffect(()=>{
        getPackage();
    }, []);



    return (
        <Layout>

            <Helmet>
                <title>{tourPackage.tourName?tourPackage.tourName:"Loading..."}</title>
            </Helmet>

            {Object.keys(tourPackage).length > 0?(
                <MainComponent tourPackage={tourPackage}/>
            ):<DataLoading/> }
        </Layout>
    );
}

const MainComponent = (props)=>{

    const backgroundImageCss = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${props.tourPackage.bannerUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "70vh",
    }

    const navigate = useNavigate();

    const [viewComponent, setViewComponent] = useState({description: true, tourPlan:false, images:false});

    const [pax, setPax] = useState(1);
    const [date, setDate] = useState();
    const [departureLocation, setDepartureLocation] = useState('');

    const changeViewComponent = (event)=>{
        const obj = viewComponent;
        const value = event.target.id;

        if(value === "descriptionBtn"){
            obj.description = true;
            obj.tourPlan = false;
            obj.images = false;
        }

        if(value === "tourPlanBtn"){
            obj.description = false;
            obj.tourPlan = true;
            obj.images = false;
        }

        if(value === "imagesBtn"){
            obj.description = false;
            obj.tourPlan = false;
            obj.images = true;
        }


        const buttons = event.target.parentNode.querySelectorAll("button");
        Array.from(buttons).forEach((button)=>{
            button.classList.remove("bg-[#2F6080]");
            button.classList.remove("!text-white");
        });

        event.target.classList.add("bg-[#2F6080]");
        event.target.classList.add("!text-white");

        setViewComponent({...obj});

    }

    const handlePickUpLocationChange = (event)=>{
        const temp = event.target.value;
        setDepartureLocation(temp);
    }

    const handleDateChange = (event)=>{
        const temp = event.target.valueAsDate;

        setDate(temp);
    }

    const incrPax = (event)=>{
        event.preventDefault();
        if(pax == props.tourPackage.paxSize.maxPax)
            return;
        setPax(pax+1);
    }

    const decrPax = (event)=>{
        event.preventDefault();

        if(pax == props.tourPackage.paxSize.minPax)
            return;
        setPax(pax-1);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        const state = {date: date, departureLocation: departureLocation, pax: pax, tourPackage: props.tourPackage };

        navigate('/checkout', {state: state});
    }




    return (
        <>
        <main className="w-full flex justify-center items-end" style={backgroundImageCss}>
            <div className="w-[90%] sm:w-[80%] flex justify-between items-end py-8">
                <div>
                    <h1 className="text-white text-4xl min-[430px]:text-5xl sm:text-6xl min-[900px]:text-7xl font-bold">{props.tourPackage.destination}</h1>
                    <h4 className="text-white text-2xl min-[430px]:text-3xl sm:text-4xl min-[900px]:text-5xl">{props.tourPackage.country}</h4>
                </div>

                <div>
                    <h2 className="w-fit text-white text-lg min-[430px]:text-xl sm:text-2xl min-[900px]:text-3xl font-bold rounded-full p-4 bg-[#2F6080] ml-auto">₹{props.tourPackage.price}*/-</h2>
                    <h4 className="text-lg sm:text-xl min-[900px]:text-2xl text-white font-bold">{props.tourPackage.duration.day} Days / {props.tourPackage.duration.night} Nights</h4>
                </div>
            </div>
        </main>

        <main className="w-full flex justify-center py-12">
            <div className="w-[90%] lg:w-[80%] flex justify-center flex-col md:flex-row">
                <div className="md:flex-[0_0_60%]">
                    <div className="w-full flex gap-2 [&>button]:text-[#2F6080] [&>button]:text-sm sm:[&>button]:text-lg [&>button]:p-2 [&>button]:rounded-lg [&>button]:border-2 [&>button]:border-[#2F6080] [&>button]:duration-300">
                        <button className="bg-[#2F6080] !text-white" id="descriptionBtn" onClick={changeViewComponent}>Description</button>
                        <button id="tourPlanBtn" onClick={changeViewComponent}>Tour Plan</button>
                        <button id="imagesBtn" onClick={changeViewComponent}>Images</button>
                    </div>

                    
                    {viewComponent.description?<Description description={props.tourPackage.description} includeExclude={[props.tourPackage.inclusion, props.tourPackage.exclusion]}/>:viewComponent.tourPlan?<TourPlan tourPlan={props.tourPackage.tourPlan}/>:viewComponent.images?<Images images={props.tourPackage.images}/>:""}


                </div>

                <div className="w-full relative h-fit overflow-hidden md:flex-[0_0_40%] font-arial p-8 py-12 border-[0.25px] border-gray-300 shadow-2xl rounded-[2rem] before:content-[''] before:absolute before:w-[94%] before:h-8 before:bg-[#2F6080] before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full">
                    <form className="bookTour" method="POST" onSubmit={handleSubmit}>
                        <h5>Book This Tour</h5>

                        <hr className="mt-4 mb-8 border border-solid border-gray-300"/>

                        <div className="flex justify-between items-center">
                            {/*Date*/}
                            <label htmlFor="date">Date:</label>
                            <input type="date" name="date" onChange={handleDateChange} required/>
                        </div>

                         <hr className="my-8 border border-solid border-gray-300"/>
                        
                        <div className="flex justify-between items-center">
                            {/*From*/}
                            <label htmlFor="location">From:</label>
                            <input placeholder="location" type="text" name="location" onChange={handlePickUpLocationChange} required/>
                        </div>

                        <hr className="my-8 border border-solid border-gray-300"/>

                        <div className="flex flex-col">
                            {/*No. of person*/}
                            <span>No. of {props.tourPackage.paxType}</span>
                            <div className="w-[90%] max-w-80 flex text-2xl font-bold rounded-xl items-center mx-auto my-4 [&>*]:p-4 [&>*]:text-center [&>button]:bg-[#2F6080] [&>button]:text-white [&>button]:flex-[0_0_25%] [&>span]:text-[#2F6080] [&>span]:flex-[0_0_50%]">
                                <button onClick={decrPax}>-</button>
                                <span>{pax}</span>
                                <button onClick={incrPax}>+</button>
                            </div>
                        </div>

                        <hr className="my-8 border border-solid border-gray-300"/>
                        <div className="flex justify-between items-center">
                            {/*Total amount*/}
                            <span>Total Amount</span>
                            <span className="text-2xl !text-[#14B9D5] text-right">₹{(props.tourPackage.price)*pax}</span>
                        </div>

                        <div className="w-full flex pt-4 md:pt-12">
                            <button className="light-blue-button mx-auto">Book Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
        </>
    );
}


const Description = (props)=>{

    return (
        <div className="w-full md:w-[90%] text-[#508CB7] py-12">
            <div>
                <h5 className="text-3xl min-[900px]:text-4xl text-[#2F6080] font-bold">Overview</h5>
                <p className="text-xl py-8">{props.description}</p>
            </div>

            <hr className="my-3 border border-solid border-gray-300"/>
            
            <div className="pt-12">
                <h5 className="text-3xl min-[900px]:text-4xl text-[#2F6080] font-bold">Included/Excluded</h5>
                <ul className="text-lg min-[900px]:text-xl py-8">
                    {props.includeExclude[0].map((include, index)=>{
                        return (<li key={index}><i className="fa-solid fa-circle-check text-green-600"></i> &nbsp; {include}</li>)
                    })}
                </ul>
                <ul className="text-lg min-[900px]:text-xl text-xl">
                    {props.includeExclude[1].map((exclude, index)=>{
                        return (<li key={index}><i className="fa-solid fa-circle-xmark text-red-500"></i> &nbsp; {exclude}</li>)
                    })}
                </ul>
                
            </div>

        </div>
    );
}

const TourPlan = (props) =>{

    return (
        <div className="w-full md:w-[90%] text-[#508CB7] py-12 [&>div]:pb-12">

            {props.tourPlan.map((days, index)=>{
                return (<div key={index}>
                    <h5 className="text-3xl min-[900px]:text-4xl text-[#2F6080] font-bold">Day - {index+1}</h5>
                    <hr className="my-3 border border-solid border-gray-300"/>
                   <ul className="text-lg min-[900px]:text-xl">
                       {days.map((plan, indx)=>{
                            return (<li key={indx}>&#x2022; &nbsp;{plan}</li>)
                       })}
                    </ul>
                </div>)
            })}
        </div>
    );
}

const Images = (props)=>{
    return (
        <div className="w-full md:w-[90%] text-[#508CB7] py-12 [&>div]:pb-12">
            <div className="flex gap-4">
                <div className="flex flex-col gap-4 [&>img]:object-cover">
                    {props.images[0]?
                            (<img src={props.images[0]} alt="" />):""
                    }
                     {props.images[1]?
                            (<img src={props.images[1]} alt="" />):""
                    }                   
                </div>

                <div className="flex flex-col gap-4 [&>img]:object-cover">
                     {props.images[2]?
                            (<img src={props.images[2]} alt="" />):""
                    } 
                     {props.images[3]?
                            (<img src={props.images[3]} alt="" />):""
                    } 
                     {props.images[4]?
                            (<img src={props.images[4]} alt="" />):""
                    } 
                </div>
            </div>
        </div>
    );
}

export default PackageInfoAndBooking;
