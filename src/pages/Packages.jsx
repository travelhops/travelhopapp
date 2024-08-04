import react from 'react';
import {useEffect, useState} from 'react';
import Layout from '../Components/Layout';
import PackageCard from '../Components/PackageCard';
import {Helmet} from "react-helmet-async";

import axios from 'axios';

const Packages = ()=>{

    const [packages, setPackages] = useState([]);
    const [search, setSearch] = useState('');
    const API_URL = process.env.API_URL;

    const backgroundImageCss = {
            backgroundImage: "url('https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719609610/packages-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "70vh",

    }


    const getPackages = ()=>{
        axios.get(API_URL+"/api/getPackages").then(res=>{
            setPackages(res.data.packages);
        });
    }


    const handleSearchChange = (event)=>{
        const temp = event.target.value;
        setSearch(temp);
    }

    const handleKeyDown = (event)=>{
        if(event.key === 'Enter'){
            handleSearch();
        }
    }

    const handleSearch = ()=>{
        if(search){
            axios.get(API_URL+"/api/searchPackages?search="+search).then(res=>{
                if(res.data.packages){
                    setPackages(res.data.packages);
                }
            });
        }
    }


    useEffect(()=>{
        
        const body = document.getElementsByTagName("body")[0];
        body.classList.add("bg-body-image");
        console.log("hi");

        if(!search){
            getPackages();
        }


        return ()=>{
            body.classList.remove("bg-body-image");
        }

    },[search]);


    return (
        <Layout>

            <Helmet>
                <title>Packages</title>
            </Helmet>


            <main className="w-full flex justify-center items-center" style={backgroundImageCss}>
                <div className="w-[90%] md:w-[60%] font-arial">
                    <h1 className="text-4xl text-white font-semibold py-4">Search Your <span className="text-[#2F6080]">Holiday</span></h1>
                    <div className="w-full relative">
                        <input type="text" name="holiday" placeholder="Enter your destination..." className="w-full text-[#051E30] text-xl p-4 rounded-xl shadow-xl border-none outline-0" onChange={handleSearchChange} onKeyDown={handleKeyDown}/>
                        <button onClick={handleSearch}><i className="text-2xl text-[#051E30] fa-solid fa-magnifying-glass absolute right-0 top-[50%] -translate-x-1/2 -translate-y-1/2" aria-hidden></i></button>
                    </div>
                </div>
            </main>

            <main className="w-full flex justify-center py-12">
                <div className="w-[90%] lg:w-[1330px] flex flex-wrap [&>div]:flex-[0_0_calc(100%-3em)] [&>div]:min-[990px]:flex-[0_0_calc(33.33%-3em)] [&>div]:md:flex-[0_0_calc(50%-3em)]">

                    {(packages.length > 0)?packages.map((pkg, index)=>{
                        return (<PackageCard pkg={pkg} key={index}/>)
                    }):"No Packages"}

                </div>
            </main>


        </Layout>
    );
}


export default Packages;
