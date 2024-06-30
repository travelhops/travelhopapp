import react from 'react';
import {useEffect, useState} from 'react';
import Layout from '../Components/Layout';


const PackageInfoAndBooking = ()=>{

    const backgroundImageCss = {
            backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/dfnpjjy2w/image/upload/v1714766891/bali.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "70vh",

    }


    const [viewComponent, setViewComponent] = useState({description: true, tourPlan:false, images:false});
    const [noOfPerson, setNoOfPerson] = useState(1);

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

    const incrNoOfPerson = (event)=>{
        event.preventDefault();
        setNoOfPerson(noOfPerson+1);
    }

    const decrNoOfPerson = (event)=>{
        event.preventDefault();

        if(noOfPerson == 1)
            return;
        setNoOfPerson(noOfPerson-1);
    }


    return (
        <Layout>
            <main className="w-full flex justify-center items-end" style={backgroundImageCss}>
                <div className="w-[90%] sm:w-[80%] flex justify-between items-end py-8">
                    <div>
                        <h1 className="text-white text-4xl min-[430px]:text-5xl sm:text-6xl min-[900px]:text-7xl font-bold">Bali</h1>
                        <h4 className="text-white text-2xl min-[430px]:text-3xl sm:text-4xl min-[900px]:text-5xl">Indonesia</h4>
                    </div>

                    <div>
                        <h2 className="w-fit text-white text-lg min-[430px]:text-xl sm:text-2xl min-[900px]:text-3xl font-bold rounded-full p-4 bg-[#2F6080] ml-auto">$12,000*/-</h2>
                        <h4 className="text-lg sm:text-xl min-[900px]:text-2xl text-white font-bold">3 Days / 4 Nights</h4>
                    </div>
                </div>
            </main>

            <main className="w-full flex justify-center py-12">
                <div className="w-[90%] lg:w-[80%] flex justify-center flex-col md:flex-row">
                    <div className="flex-1 md:flex-[0_0_60%]">
                        <div className="w-full flex gap-2 [&>button]:text-[#2F6080] [&>button]:text-sm sm:[&>button]:text-lg [&>button]:p-2 [&>button]:rounded-lg [&>button]:border-2 [&>button]:border-[#2F6080] [&>button]:duration-300">
                            <button className="bg-[#2F6080] !text-white" id="descriptionBtn" onClick={changeViewComponent}>Description</button>
                            <button id="tourPlanBtn" onClick={changeViewComponent}>Tour Plan</button>
                            <button id="imagesBtn" onClick={changeViewComponent}>Images</button>
                        </div>

                        
                        {viewComponent.description?<Description/>:viewComponent.tourPlan?<TourPlan/>:viewComponent.images?<Images/>:""}


                    </div>

                    <div className="w-full relative h-fit flex-1 overflow-hidden md:flex-[0_0_40%] font-arial p-8 py-12 border-[0.25px] border-gray-300 shadow-2xl rounded-[2rem] before:content-[''] before:absolute before:w-[94%] before:h-8 before:bg-[#2F6080] before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full">
                        <form className="bookTour" method="POST">
                            <h5>Book This Tour</h5>

                            <hr className="mt-4 mb-8 border border-solid border-gray-300"/>

                            <div className="flex justify-between items-center">
                                {/*Date*/}
                                <label htmlFor="date">Date:</label>
                                <input type="date" name="date" />
                            </div>

                             <hr className="my-8 border border-solid border-gray-300"/>
                            
                            <div className="flex justify-between items-center">
                                {/*From*/}
                                <label htmlFor="location">From:</label>
                                <input placeholder="location" type="text" name="location" />
                            </div>

                            <hr className="my-8 border border-solid border-gray-300"/>

                            <div className="flex flex-col">
                                {/*No. of person*/}
                                <span>No. of Persons</span>
                                <div className="w-[90%] max-w-80 flex text-2xl font-bold rounded-xl items-center mx-auto my-4 [&>*]:p-4 [&>*]:text-center [&>button]:bg-[#2F6080] [&>button]:text-white [&>button]:flex-[0_0_25%] [&>span]:text-[#2F6080] [&>span]:flex-[0_0_50%]">
                                    <button onClick={decrNoOfPerson}>-</button>
                                    <span>{noOfPerson}</span>
                                    <button onClick={incrNoOfPerson}>+</button>
                                </div>
                            </div>

                            <hr className="my-8 border border-solid border-gray-300"/>
                            <div className="flex justify-between items-center">
                                {/*Total amount*/}
                                <span>Total Amount</span>
                                <span className="text-2xl !text-[#14B9D5] text-right">${2000*noOfPerson}</span>
                            </div>

                            <div className="w-full flex pt-12">
                                <button className="light-blue-button mx-auto">Book Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </Layout>
    );
}


const Description = ()=>{
    return (
        <div className="w-full md:w-[90%] text-[#508CB7] py-12">
            <div>
                <h5 className="text-3xl min-[900px]:text-4xl text-[#2F6080] font-bold">Overview</h5>
                <p className="text-xl py-8">Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast. </p>
            </div>

            <hr className="my-3 border border-solid border-gray-300"/>
            
            <div className="pt-12">
                <h5 className="text-3xl min-[900px]:text-4xl text-[#2F6080] font-bold">Included/Excluded</h5>
                <ul className="text-lg min-[900px]:text-xl py-8">
                    <li>Assistance on Arrival & Departure at Airport</li>
                    <li>Meals as per Hotel Plan</li>
                    <li>Air conditioned accommodation on double sharing basis at all places</li>
                </ul>
                <ul className="text-lg min-[900px]:text-xl text-xl">
                    <li>Any kind of Personal Expenses</li>
                    <li>Domestic & International airfare</li>
                </ul>
                
            </div>

        </div>
    );
}

const TourPlan = () =>{
    return (
        <div className="w-full md:w-[90%] text-[#508CB7] py-12 [&>div]:pb-12">
            <div>
                <h5 className="text-3xl min-[900px]:text-4xl text-[#2F6080] font-bold">Day - 01</h5>
                <hr className="my-3 border border-solid border-gray-300"/>
               <ul className="text-lg min-[900px]:text-xl">
                    <li>Arival/Airport Pick up</li>
                    <li>Check-in to Hotel Near Port Blair Beach</li>
                    <li>Sightseeing at Carboy's Cave</li>
                    <li>Seeking Adventure Activity</li>
                    <li>Return to Hotel</li>
                </ul>
            </div>
            <div>
                <h5 className="text-3xl min-[900px]:text-4xl text-[#2F6080] font-bold">Day - 02</h5>
                <hr className="my-3 border border-solid border-gray-300"/>
                <ul className="text-lg min-[900px]:text-xl">
                    <li>Arival/Airport Pick up</li>
                    <li>Check-in to Hotel Near Port Blair Beach</li>
                    <li>Sightseeing at Carboy's Cave</li>
                    <li>Seeking Adventure Activity</li>
                    <li>Return to Hotel</li>
                </ul>
            </div>
            <div>
                <h5 className="text-3xl min-[900px]:text-4xl text-[#2F6080] font-bold">Day - 03</h5>
                <hr className="my-3 border border-solid border-gray-300"/>
                <ul className="text-lg min-[900px]:text-xl">
                    <li>Arival/Airport Pick up</li>
                    <li>Check-in to Hotel Near Port Blair Beach</li>
                    <li>Sightseeing at Carboy's Cave</li>
                    <li>Seeking Adventure Activity</li>
                    <li>Return to Hotel</li>
                </ul>
            </div>
            <div>
                <h5 className="text-3xl min-[900px]:text-4xl text-[#2F6080] font-bold">Day - 05</h5>
                <hr className="my-3 border border-solid border-gray-300"/>
                <ul className="text-lg min-[900px]:text-xl">
                    <li>Arival/Airport Pick up</li>
                    <li>Check-in to Hotel Near Port Blair Beach</li>
                    <li>Sightseeing at Carboy's Cave</li>
                    <li>Seeking Adventure Activity</li>
                    <li>Return to Hotel</li>
                </ul>
            </div>
        </div>
    );
}

const Images = ()=>{
    return (
        <div className="w-full md:w-[90%] text-[#508CB7] py-12 [&>div]:pb-12">
            <div className="flex gap-4">
                <div className="flex flex-col gap-4 [&>img]:object-cover">
                    <img src="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719756145/images/image1.jpg" alt="" />
                    <img src="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719756145/images/image2.jpg" alt="" />
                </div>

                <div className="flex flex-col gap-4 [&>img]:object-cover">
                    <img src="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719756145/images/image3.jpg" alt="" />
                    <img src="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719756145/images/image4.jpg" alt="" />
                    <img src="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719756145/images/image5.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default PackageInfoAndBooking;
