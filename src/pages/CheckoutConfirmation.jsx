import react from 'react';
import Layout from '../Components/Layout';

const CheckoutConfirmation = ()=>{

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
                            <span>#223345-987654</span>
                        </div>
                        <div>
                            <span className="font-bold">Date</span>
                            <br/>
                            <span>05-05-2024</span>
                        </div>
                        <div>
                            <span className="font-bold">Total Amount</span>
                            <br/>
                            <span>$24,000</span>
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
                        <li className="!mb-4"><span className="font-bold">Bai, Indonesia</span></li>
                        <li><span className="font-bold">Date: </span> May 5, 2024</li>
                        <li><span className="font-bold">Duration: </span>3 Days / 4 Nights</li>
                        <li><span className="font-bold">Departure From: </span>Delhi, India</li>
                        <li><span className="font-bold">No. of Person: </span>02</li>
                    </ul>

                    <div className="w-full text-right text-gray-600 p-8 bg-gray-200 mt-12 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] font-bold [&>span]:text-black ">
                        Total Amount : <span>$24,000</span> 
                        <br/>
                        Amount Paid : <span>$0</span> 
                        <br/>
                        Amount Due : <span className="!text-red-500">$24,000</span> 
                    </div>
                </div>

            </main>
           
        </Layout>
    );
}

export default CheckoutConfirmation; 
