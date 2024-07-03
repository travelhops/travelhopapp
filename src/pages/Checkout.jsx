import react from 'react';
import Layout from '../Components/Layout';


const Checkout = ()=>{

    const backgroundImageCss = {
            backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719775094/checkout-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "50vh"

    }

    return (
        <Layout>
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
                                <li className="!mb-4"><span className="font-bold">Bai, Indonesia</span></li>
                                <li><span className="font-bold">Date: </span> May 5, 2024</li>
                                <li><span className="font-bold">Duration: </span>3 Days / 4 Nights</li>
                                <li><span className="font-bold">Departure From: </span>Delhi, India</li>
                                <li><span className="font-bold">No. of Person: </span>02</li>
                                <li className="mt-4 text-red-600"><span className="font-bold text-gray-400">Total Amount</span> $2000</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex-[0_0_40%] p-4 md:p-8 border-[1px] border-gray-400 shadow-2xl">

                        <form method="POST" className="flex flex-col text-[#2F6080] [&>input]:w-full [&>input]:text-lg md:[&>input]:text-xl [&>input]:p-2 md:[&>input]:p-4 [&>input]:mb-2 [&>input]:border-[1px] [&>input]:focus:ring-0 [&>input]:outline-none">

                            <h2 className="text-3xl lg:text-4xl font-medium mx-auto">Contact Information</h2>

                            <hr className="my-4 border border-solid border-gray-300"/>
                            
                            <input type="text" placeholder="First Name" name="fname" />
                            <input type="text" placeholder="Last Name" name="fname" />
                            <input type="email" placeholder="Email" name="email" />
                            <input type="text" placeholder="Contact Number" name="phone" />

                            <hr className="my-8 border border-solid border-gray-300"/>

                            <div className="flex justify-between text-lg md:text-xl">
                                <span className="font-medium">Payment Method: </span>
                                <span className="p-1 bg-gray-200">Book Now, Pay later</span>
                            </div>
                            
                            <span className="text-sm text-[#4CAF50] py-2">
                                <input type="checkbox" name="terms" /> 
                                &nbsp; I read and agree to the Terms & Conditions
                            </span>

                            <button className="light-blue-button w-fit mt-8 text-lg">Complete My Order</button>
                            
                        </form>
                    </div>
                </div>
            </main>

        </Layout>
    );
}

export default Checkout;
