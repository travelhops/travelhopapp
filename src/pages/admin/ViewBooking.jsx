import react from 'react';
import AdminPanel from '../../Components/admin/AdminPanel';


const ViewBooking = ()=>{
    return (
        <div className="w-full flex">
            <div className="flex-[0_0_20%]">
                <AdminPanel/>
            </div>

            <div className="flex-[0_0_80%] bg-gray-100 py-12">
                <div className="w-[95%] flex justify-center gap-64 mx-auto p-12 bg-white shadow-xl">
                    <div className="flex flex-col">
                        <h2 className="uppercase text-3xl">Order Status</h2>
                        <hr className="my-3 border border-solid border-gray-300"/>
                        <div className="flex text-xl [&>ul]:px-2">
                            <ul className="text-gray-700 [&>li]:py-2">
                                <li>Order Number: </li>
                                <li>Booking Date: </li>
                                <li>Tour: </li>
                                <li>Travel Date: </li>
                                <li>From: </li>
                                <li>No. of Person: </li>
                            </ul>

                            <ul className="text-[#2F6080] [&>li]:py-2">
                                <li>#223345-987654</li>
                                <li>May 4, 2024</li>
                                <li>Dubai Tour Package</li>
                                <li>May 14, 2024</li>
                                <li>Delhi, India</li>
                                <li>02</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="uppercase text-3xl">Traveler Information</h2>
                        <hr className="my-3 border border-solid border-gray-300"/>
                        <div className="flex text-xl [&>ul]:px-2">
                            <ul className="text-gray-700 [&>li]:py-2">
                                <li>First Name: </li>
                                <li>Last Name: </li>
                                <li>Email: </li>
                                <li>Contact No: </li>
                            </ul>

                            <ul className="text-[#2F6080] [&>li]:py-2">
                                <li>Suyash Yadav</li>
                                <li>Yadav</li>
                                <li>client@gmail.com</li>
                                <li>9876543210</li>
                            </ul>
                        </div>

                        <h2 className="uppercase text-3xl mt-3">Pricing</h2>
                        <hr className="my-3 border border-solid border-gray-300"/>
                        <div className="text-gray-700 text-xl">
                            Total Amount:&nbsp;&nbsp;<span className="text-red-500">$24,000</span>
                        </div>
                            
                    </div>

                </div>
            </div>
        </div>

    )
}

export default ViewBooking;
