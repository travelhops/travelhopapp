import react from "react";

import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import Layout from "./../Components/Layout";
import PackageCard from "./../Components/PackageCard";
import PackageCarousal from "./../Components/PackageCarousal";
import TestimonialCard from "./../Components/TestimonialCard";
import TestimonialCarousal from "./../Components/TestimonialCarousal";
import GalleryPhoto from "./../Components/GalleryPhoto";


import axios from 'axios';

const Home = ()=>{

    const [internationalPackages, setInternationalPackages] = useState([]);
    const [domesticPackages, setDomesticPackages] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const API_URL = process.env.API_URL;

    const backgroundImageCss = {
            backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.3618697478991597) 50% ), linear-gradient( to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.3618697478991597) 20% ), url('https://res.cloudinary.com/dfnpjjy2w/image/upload/v1714766884/hero-image.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            backgroundPosition: "center"

    }

    const getInternationalPackages = ()=>{
        axios.get(API_URL+"/api/searchPackages?search=international&topPackage=true").then(res=>{
            setInternationalPackages(res.data.packages);
        });
    }

    const getDomesticPackages = ()=>{
        axios.get(API_URL+"/api/searchPackages?search=domestic&topPackage=true").then(res=>{
            setDomesticPackages(res.data.packages);
        });
    }

    const getTestimonials = ()=>{
        axios.get(API_URL+"/api/getTestimonials").then(res=>{
            setTestimonials(res.data.testimonials);
        });
    }

    useEffect(()=>{
        getInternationalPackages();
        getDomesticPackages();
        getTestimonials();
    }, []);

    return (
        <Layout>
            <Helmet>
                <title>Travel Hop Tours</title>
                <meta name="description" content="Grap best travel packages now" />
            </Helmet>

            <main>
                <div className="flex items-center justify-center h-screen w-full"  style={backgroundImageCss}>
                    <div className="text-white w-9/12 mt-28 sm:mt-20 md:mt-18">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl">Time to Travel!</h1>
                        <br/>
                        <p className="text-lg w-full sm:w-7/12 md:w-9/12 sm:text-xl md:text-2xl">Travel hop, where we turn travel dreams into unforgettable experiences. With a passion for exploration and a commitment to exceptional serivce, we take pride in curating journeys that leave lasting memories.</p>
                        <br/>
                        <br/>
                        <Link to="/about" className="inline-block w-40 h-16 md:w-56 md:h-20 border-solid border-white border-[1px] rounded-xl text-2xl text-center leading-[4rem] md:leading-[5rem] hover:bg-white hover:text-black duration-200">About Us</Link>
                    </div>
                </div>

            </main>
            

            {/*Top International Packages Start*/}
            <main className="w-full md:w-[95%] mx-auto flex justify-center items-center flex-col py-12 md:flex-row overflow-hidden">
                <div className="w-[80%] md:w-full flex-[20%] xl:ml-12 md:ml-6">
                    <div className="flex flex-col">
                        <p className="text-6xl 2xl:text-8xl lg:text-7xl font-qwigley text-[#FF5E5E]">Our Top</p>
                        <p className="text-4xl sm:text-5xl 2xl:text-7xl lg:text-5xl relative" style={{fontFamily: "arial", color: "#2E6084"}}>International <br className="hidden md:block"/><span className="inline md:hidden">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Packages
                            <img src={"https://res.cloudinary.com/dfnpjjy2w/image/upload/v1717014584/static/bursh.png"} className="absolute -left-[5%] -top-[135%] sm:-top-[150%] md:-top-[50%] 2xl:-top-[40%] -z-[1] opacity-50 -rotate-6 sm:w-64 md:w-72 2xl:w-auto w-48" />
                        </p>
                        <div className="flex items-center mt-6">
                            <div className="flex items-center justify-center w-10 h-10 2xl:w-14 2xl:h-14 bg-[#637A42] rounded-full mr-4">
                                <i className="fa-solid fa-arrow-right text-white" aria-hidden></i>
                            </div>
                            <p className="uppercase text-nowrap tracking-[0.2em] text-sm">Explore All programs</p>
                        </div>
                    </div>
                </div>

                {internationalPackages.length > 0?(
                    <PackageCarousal>
                        {internationalPackages.map((pkg, index)=>{
                             return (<PackageCard pkg={pkg} key={index}/>)
                        })}
                    </PackageCarousal>
                ):""}

                
            </main>
            {/*Top International Packages End*/}
            {/*Top Domestic Packages Start*/}
            <main className="w-full md:w-[95%] mx-auto flex justify-center items-center flex-col-reverse py-16 md:flex-row">
                 
                {domesticPackages.length > 0?(
                    <PackageCarousal reverse="true">
                        {domesticPackages.map((pkg, index)=>{
                             return (<PackageCard pkg={pkg} key={index}/>)
                        })}
                    </PackageCarousal>
                ):""}

                <div className="w-[80%] md:w-full flex-[20%]  xl:ml-12 xl:mr-18 md:ml-6 md:mr-6">
                    <div className="flex flex-col float-right">
                        <p className="text-6xl 2xl:text-8xl lg:text-7xl font-qwigley text-[#FF5E5E]">Our Top</p>
                        <p className="text-4xl sm:text-5xl 2xl:text-7xl lg:text-5xl relative" style={{fontFamily: "arial", color: "#2E6084"}}>Domestic <br className="hidden md:block"/><span className="inline md:hidden">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Packages
                            <img src={"https://res.cloudinary.com/dfnpjjy2w/image/upload/v1717014584/static/bursh.png"} className="absolute -left-[5%] -top-[135%] sm:-top-[150%] md:-top-[50%] 2xl:-top-[40%] -z-[1] opacity-50 -rotate-6 sm:w-64 md:w-72 2xl:w-auto w-48" />
                        </p>

                         <div className="flex items-center mt-6">
                            <div className="flex items-center justify-center w-10 h-10 2xl:w-14 2xl:h-14 bg-[#637A42] rounded-full mr-4">
                                <i aria-hidden className="fa-solid fa-arrow-right text-white"></i>
                            </div>
                            <p className="uppercase text-nowrap tracking-[0.2em] text-sm">Explore All programs</p>
                        </div>
                    </div>
                </div>

            </main>

            {/*Top Domestic Packages End*/}

            {/*Testimonial Start*/}
            <main className="relative flex justify-center items-center flex-col py-16 bg-[#E9F1F9] z-10">
                
                <div className="absolute top-0 right-0 z-[-1] w-full h-full bg-cover bg-no-repeat bg-center" style={{backgroundImage: "linear-gradient(rgba(0, 0, 200, 0.2), rgba(0, 0, 200, 0.2)),url('https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719142709/testimonial-bg-min.webp')"}}></div>
                
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl">Testimonials</h2>
                <p className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl mb-4">What our Clients Says</p>

                {testimonials.length > 0?(
                    <TestimonialCarousal>
                        {testimonials.map((testimonial, index)=>{
                            return (<TestimonialCard data={testimonial} index={index} key={index}/>)
                        })}
                    </TestimonialCarousal>
                ):""}
            </main>
            {/*Testimonial End*/}

            {/*Photo Gallery Start*/}
             <main className="flex justify-center items-center flex-col py-24 overflow-hidden">
                 <h2 className="text-3xl md:text-4xl mb-24 text-[#2F6080]">Memories of our Clients</h2>

                 <div className="grid grid-cols-2 sm:grid-cols-3 justify-center w-[80%] lg:w-[70%] gap-2 md:gap-5">
                     <div className="flex flex-col gap-2 md:gap-5">
                         <GalleryPhoto url="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1717274619/memories-2.png" /> 
                        <GalleryPhoto url="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1717274619/memories-4.png" /> 
                     </div>
                     <div className="flex flex-col gap-2 md:gap-5">
                        <GalleryPhoto url="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1717274619/memories-3.png" /> 
                        <GalleryPhoto url="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1717274619/memories-1.png" /> 
                     </div>
                     <div className="flex flex-row sm:flex-col gap-2 md:gap-5 col-span-2 sm:col-span-1">
                        <GalleryPhoto url="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1717274619/memories-5.png" style="h-[500%]" /> 
                         <GalleryPhoto url="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1717274619/memories-6.png" style="" /> 
                     </div>
                </div>
            </main>

            {/*Photo Gallery End*/}
        </Layout>
    );
}


export default Home;

