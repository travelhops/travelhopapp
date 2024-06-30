import react from 'react';


const Footer = ()=>{
    return (
        <footer className="bg-[#051E30]">
            <div className="flex flex-col p-0 md:p-6 w-full lg:w-[80%] md:w-[100%] mx-0 md:mx-auto text-[#D2DBE1]">
                <h4 className="text-4xl md:text-6xl uppercase p-6 pb-12 text-white">Travel Hop</h4> 
                <div className="flex flex-col md:flex-row">
                    <div className="flex-[0_0_33.33%] px-6">
                        <div className="w-fit mx-o md:mx-auto">
                            <h6 className="text-2xl md:text-4xl p-2 text-white">About Us</h6>
                            <p className="p-2">
                                Travel Hop, where we turn travel dreams into unforgettable experiences. With a passion for exploration and a commitment to exceptional service, we take pride in curating journeys that leave lasting memories.

                                <br/>
                                <br/>

                            </p>
                            <div className="p-2 text-xl md:text-4xl [&>*]:mr-2 md:[&>*]:mr-4 pb-6">
                                <i aria-hidden className="fa-brands fa-square-facebook"></i>
                                <i aria-hidden className="fa-brands fa-instagram"></i>
                                <i aria-hidden className="fa-brands fa-youtube"></i>
                                <i aria-hidden className="fa-brands fa-x-twitter"></i>
                            </div>
                       </div>
                    </div>
                    <div className="flex-[0_0_33.33%] px-6">
                        <div className="w-fit mx-0 md:mx-auto">
                            <h6 className="text-2xl md:text-4xl p-2 text-white">Quick Links</h6>
                            <ul className="list-none p-2 leading-7 [&>*:hover]:text-white [&>*:before]:content-['|'] [&>*:before]:mx-2 [&>*]:inline md:[&>*]:block md:[&>*:before]:hidden">
                                <li>Home</li>
                                <li>Packages</li>
                                <li>Privacy Policy</li>
                                <li>Cancellation Policy</li>
                                <li>Terms & Conditions</li>
                                <li>About Us</li>
                                <li>Gallery</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-[0_0_33.33%] px-6">
                        <div className="w-fit mx-0 md:mx-auto">
                            <h6 className="text-2xl md:text-4xl p-2 text-white">Address</h6>
                            <p className="p-2">
                                Travel Hop <br/>
                                    An 145 Rajharsh colony kolar road, Bhopal (M.P) <br/>
                                +91 9116276312 <br/>
                                travelhopp2@gmail.com <br/>
                                travelhop.co.in
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-sm md:text-lg mx-auto mt-24">
                    Copyright © 2023 Travel Hop India. All rights reserved.
                </p>
            </div>
        </footer>
    );
}


export default Footer;
