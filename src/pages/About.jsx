import react from "react";
import {useEffect, useRef} from 'react';
import {Helmet} from "react-helmet-async";
import {Link} from 'react-router-dom';
import Layout from '../Components/Layout';
const About = ()=>{
    
    const whyChooseSlider = useRef(null);
    const ourTeamSlider = useRef(null);


    const numberOfCards = ()=>{
        if(window.screen.width > 990)
            return 0;
        
        if(window.screen.width <= 990 && window.screen.width > 768)
            return 2;

        if(window.screen.width <= 768)
            return 1;
    }

    const getTranslateX = (card)=>{
        let matrix = window.getComputedStyle(card).getPropertyValue("transform");

        matrix = matrix.substring(7, matrix.length-1).split(",");

        return parseInt(matrix[4]);
    }


    const rightSlide = (div)=>{
        const cards = Array.from(div.current.children); 
        const gap = parseInt(window.getComputedStyle(div.current).gap);
        const cardWidth = cards[0].offsetWidth;

        console.log(getTranslateX(cards[0]));
        if(getTranslateX(cards[0]) <= -1*(cardWidth+gap)*(cards.length-numberOfCards()))
            return;

        for(let i = 0; i < cards.length; i++){
            const translateX = getTranslateX(cards[i])-(cardWidth+gap);
            console.log(getTranslateX(cards[i]));
            cards[i].style.transform = `translateX(${translateX}px)`;
        }
    }

    const leftSlide = (div)=>{
        const cards = Array.from(div.current.children); 
        const gap = parseInt(window.getComputedStyle(div.current).gap);
        const cardWidth = cards[0].offsetWidth;

        if(getTranslateX(cards[0]) >= 0)
            return;

        for(let i = 0; i < cards.length; i++){
            const translateX = getTranslateX(cards[i])+(cardWidth+gap);
            console.log(getTranslateX(cards[i]));
            cards[i].style.transform = `translateX(${translateX}px)`;
        }
    }



    const backgroundImageCss = {
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://res.cloudinary.com/dfnpjjy2w/image/upload/v1714638246/about-us-bg-min.webp')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "70vh",

    }



    return(
        <Layout>
            <Helmet>
                <title>About</title>
                <meta name="description" content="This is about page"/>
            </Helmet>

            <main className="w-full bg-right md:bg-center flex items-center justify-center" style={backgroundImageCss}>
                <div className="text-white w-9/12 mt-28 sm:mt-20 md:mt-18">
                    <h1 className="font-arial text-5xl sm:text-6xl md:text-7xl font-bold">About Us</h1>
                    <br/>
                    <br/>
                    <p className="font-poppins md:leading-normal text-lg w-full sm:w-7/12 md:w-9/12 sm:text-xl md:text-2xl">
                        Travel Hop, where we turn travel dreams into unforgettable experiences. With a passion for exploration and a commitment to exceptional service, we take pride in curating journeys that leave lasting memories.

                    </p>
                </div>
            </main>


            <main className="flex justify-center py-16">
                <div className="w-[90%] md:w-[60%] flex items-center flex-col text-[#2F6080] font-poppins">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl mb-8">Our Mission</h2>
                    <p className="text-center text-lg md:text-2xl md:leading-normal sm:text-xl ">
                        At Travel Hop, our mission is to inspire and empower individuals to discover the world through immersive travel experiences. We strive to provide personalized services that cater to the unique preferences of each traveler.
                    </p>
                </div>
            </main>


            <main className="relative z-[1] w-full flex justify-center py-16">
                <img className="absolute z-[-1] object-cover h-full w-full opacity-40" src="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719605968/our-services-bg.webp" alt="" />
                <div className="max-w-[1280px] flex justify-center font-poppins">
                    <div className="flex-[50%] p-8 md:p-12">
                        <h4 className="text-3xl md:text-4xl text-[#508CB7]">Our Services</h4>
                        <h3 className="text-4xl md:text-5xl font-bold text-[#2F6080] mb-6">Join The Adventure With Stories</h3>
                        <p className="text-lg text-[#2F6080]">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>

                        <div className="flex flex-wrap gap-x-4 md:gap-x-12 min-[1130px]:gap-x-24 gap-y-8 min-[1130px]:gap-y-16  py-12">
                            <div className="flex-1 text-[#2F6080]">
                                {/*<img src="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719185546/static/map.png" alt="" />*/}
                                <span className="icon-map text-5xl sm:text-6xl lg:text-7xl"></span>
                                <p className="text-base min-[430px]:text-lg sm:text-xl font-medium py-6">Custom Destination</p>
                            </div>

                            <div className="flex-1 text-[#2F6080]">
                                {/*<img src="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719185546/static/camera.png" alt="" />*/}
                                <span className="icon-camera text-5xl sm:text-6xl lg:text-7xl"></span>
                                <p className="text-base min-[430px]:text-lg sm:text-xl font-medium py-6">Unforgettable Memories</p>
                            </div>
                            
                            <div className="flex-1 text-[#2F6080]">
                                {/*<img src="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719185546/static/wallet.png" alt="" />*/}
                                <span className="icon-wallet text-5xl sm:text-6xl lg:text-7xl"></span>
                                <p className="text-base min-[430px]:text-lg sm:text-xl font-medium py-6">Budget Friendly</p>
                            </div>

                            <div className="flex-1 text-[#2F6080]">
                                {/*<img src="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719185546/static/telephone.png" alt="" />*/}
                                <span className="icon-telephone text-5xl sm:text-6xl lg:text-7xl"></span>
                                <p className="text-base min-[430px]:text-lg sm:text-xl font-medium py-6">24/7 Available</p>
                            </div>

                            <div className="flex-1 text-[#2F6080]"> 
                                {/*<img src="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719185546/static/vehicle.png" alt="" />*/}
                                <span className="icon-vehicle text-5xl sm:text-6xl lg:text-7xl"></span>
                                <p className="text-base min-[430px]:text-lg sm:text-xl font-medium py-6">Transportation</p>
                            </div>
                            <div className="flex-1"></div>
                        </div>
                    </div>
                    <div className="flex-[40%] pl-0 lg:pl-12 p-12 hidden md:block">
                        <img className="w-full h-[90%] -scale-x-100 object-cover" src="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719183193/person-clicking-photo.webp" alt="" />
                    </div>
                </div>
            </main>

            <main className="w-full flex flex-col items-center py-16">
                <div className="w-full h-[25rem] md:h-[35rem] lg:h-[45rem] flex justify-center flex-col items-center font-poppins bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url('https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719429384/about-us-only-mountain.webp')"}}>
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-32">Why Choose Travel Hop?</h2>


                </div>

                <div className="relative w-full flex flex-col items-center md:max-w-[1280px] text-center">
                    <div ref={whyChooseSlider} className="w-full flex gap-8 p-8 font-poppins overflow-hidden hideScrollbar -translate-y-1/2">
                        <div className="flex-[0_0_100%] md:flex-[0_0_calc(50%-1em)] min-[990px]:flex-1 bg-white rounded-xl shadow-xl transform duration-300">
                            <div className="w-full h-24 text-center bg-[#103D5D] py-8 rounded-[0_0_0_50px_/_0_0_0_50px]"><h5 className="text-white text-2xl lg:text-3xl">Expertise</h5></div>
                            <p className="text-center text-xl p-8 pb-20 text-[#508CB7]">Our team comprises seasoned travel experts with in-depth destination knowledge.</p>
                        </div>

                        <div className="flex-[0_0_100%] md:flex-[0_0_calc(50%-1em)] min-[990px]:flex-1 bg-white rounded-xl shadow-xl transform duration-300">
                            <div className="w-full h-24 text-center bg-[#103D5D] py-8 rounded-[0_0_0_50px_/_0_0_0_50px]"><h5 className="text-white text-2xl lg:text-3xl">Personalized Service</h5></div>
                            <p className="text-center text-xl p-8 pb-20 text-[#508CB7]">Tailoring every trip to meet the unique needs and desires of our clients.</p>
                        </div>

                        <div className="flex-[0_0_100%] md:flex-[0_0_calc(50%-1em)] min-[990px]:flex-1 bg-white rounded-xl shadow-xl transform duration-300">
                            <div className="w-full h-24 text-center bg-[#103D5D] py-8 rounded-[0_0_0_50px_/_0_0_0_50px]"><h5 className="text-white text-2xl lg:text-3xl">Reliability</h5></div>
                            <p className="text-center text-xl p-8 pb-20 text-[#508CB7]">We prioritize safety, reliability, and efficiency in every aspect of our services..</p>
                        </div>


                    </div>

                    <button className="absolute block min-[990px]:hidden top-0 right-0 -translate-y-1/2 p-4 mr-4 bg-white/[0.5] rounded-full shadow-xl duration-300 hover:bg-[#14B9D5] hover:text-white" onClick={()=>{leftSlide(whyChooseSlider)}}><i aria-hidden className="fa-solid fa-arrow-right pointer-events-none"></i></button>

                    <button className="absolute block min-[990px]:hidden top-0 left-0 -translate-y-1/2 p-4 ml-4 bg-white/[0.5] rounded-full shadow-xl duration-300 hover:bg-[#14B9D5] hover:text-white" onClick={()=>{rightSlide(whyChooseSlider)}}><i aria-hidden className="fa-solid fa-arrow-left pointer-events-none"></i></button>
                    <Link to="/" className="-mt-20 px-8 py-4 w-fit rounded-xl bg-[#2E6080] shadow-[inset_0_1.9px_1.9px_rgba(0,0,0,0.25)] text-white text-2xl -translate-y-full" >Book Your Tour</Link>
                </div>



            </main>


            <main className="w-full flex justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719585591/teams-bg.webp)"}}>
                <div className="relative w-full md:max-w-[1280px] p-4 flex flex-col items-center justify-center">
                    <h4 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-32 mb-12">Our Team</h4>
                    <div ref={ourTeamSlider} className="w-full flex gap-16 p-8 overflow-hidden hideScrollbar">
                        <div className="flex-[0_0_100%] md:flex-[0_0_calc(50%-2em)] min-[990px]:flex-1 flex flex-col items-center p-8 rounded-xl bg-[rgba(255,255,255,0.8)] transform duration-300">
                            <img className="p-8 mb-4 w-64 bg-white rounded-xl" src="https://www.pngkit.com/png/full/349-3499697_man-placeholder-blank-avatar-icon-png.png" alt="" />
                            <span className="text-[#508CB7] text-3xl font-bold">Rishi Jain</span>
                            <span className="text-[#508CB7] text-3xl">CEO</span>
                        </div>
                        <div className="flex-[0_0_100%] md:flex-[0_0_calc(50%-2em)] min-[990px]:flex-1 flex flex-col items-center p-8 rounded-xl bg-[rgba(255,255,255,0.8)] transform duration-300">
                            <img className="p-8 mb-4 w-64 bg-white rounded-xl" src="https://www.pngkit.com/png/full/349-3499697_man-placeholder-blank-avatar-icon-png.png" alt="" />
                            <span className="text-[#508CB7] text-3xl font-bold">Rishi Jain</span>
                            <span className="text-[#508CB7] text-3xl">CEO</span>
                        </div>
                        <div className="flex-[0_0_100%] md:flex-[0_0_calc(50%-2em)] min-[990px]:flex-1 flex flex-col items-center p-8 rounded-xl bg-[rgba(255,255,255,0.8)] transform duration-300">
                            <img className="p-8 mb-4 w-64 bg-white rounded-xl" src="https://www.pngkit.com/png/full/349-3499697_man-placeholder-blank-avatar-icon-png.png" alt="" />
                            <span className="text-[#508CB7] text-3xl font-bold">Rishi Jain</span>
                            <span className="text-[#508CB7] text-3xl">CEO</span>
                        </div>
                    </div>

                    <button className="absolute block min-[990px]:hidden top-1/2 right-0 -translate-y-1/2 p-4 mr-4 bg-white/[0.5] rounded-full shadow-xl duration-300 hover:bg-[#14B9D5] hover:text-white" onClick={()=>{leftSlide(ourTeamSlider)}}><i aria-hidden className="fa-solid fa-arrow-right pointer-events-none"></i></button>

                    <button className="absolute block min-[990px]:hidden top-1/2 left-0 -translate-y-1/2 p-4 ml-4 bg-white/[0.5] rounded-full shadow-xl duration-300 hover:bg-[#14B9D5] hover:text-white" onClick={()=>{rightSlide(ourTeamSlider)}}><i aria-hidden className="fa-solid fa-arrow-left pointer-events-none"></i></button>
                </div>


            </main>


            <main className="w-full flex justify-center py-24">

                <div className="w-[90%] md:max-w-[1280px] flex items-center flex-col">
                    <h4 className="text-[#2F6080] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold py-12">Find our office at...</h4>

                    <div className="w-full">
                        <iframe className="w-full shadow-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117350.25499839976!2d77.32349063166994!3d23.199546032713414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1719606773272!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </main>

        </Layout>
    );
}


export default About;
