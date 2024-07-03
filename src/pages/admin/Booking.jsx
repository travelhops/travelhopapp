import react from 'react';
import AdminPanel from '../../Components/admin/AdminPanel';


const Booking = ()=>{
    return (
        <div className="w-full flex">
            <div className="flex-[0_0_20%]">
                <AdminPanel/>
            </div>

            <div className="flex-[0_0_80%] bg-gray-100 py-12">
                <div className="w-[95%] mx-auto p-12 bg-white shadow-xl">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Order No.</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Contact No.</th>
                                <th>Travel Date</th>
                                <th>View</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="[&>td:first-child]:text-[#2F6080]">
                                <td>#223345-987654</td>
                                <td>Suyash</td>
                                <td>Yadav</td>
                                <td>9876543210</td>
                                <td>05/07/2024</td>
                                <td>View</td>
                                <td>Delete</td>
                            </tr>
                            <tr className="[&>td:first-child]:text-[#2F6080]">
                                <td>#223345-987654</td>
                                <td>Suyash</td>
                                <td>Yadav</td>
                                <td>9876543210</td>
                                <td>05/07/2024</td>
                                <td>View</td>
                                <td>Delete</td>
                            </tr>
                            <tr className="[&>td:first-child]:text-[#2F6080]">
                                <td>#223345-987654</td>
                                <td>Suyash</td>
                                <td>Yadav</td>
                                <td>9876543210</td>
                                <td>05/07/2024</td>
                                <td>View</td>
                                <td>Delete</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}


export default Booking;
