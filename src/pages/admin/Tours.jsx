import react from 'react';
import AdminPanel from '../../Components/admin/AdminPanel';

const Tours = ()=>{
    return (
        <div className="w-full flex">
            <div className="flex-[0_0_20%]">
                <AdminPanel/>
            </div>
            <div className="flex-[0_0_80%] bg-gray-100 py-12">
                <div className="w-[95%] flex justify-between mx-auto py-12">
                    <div className="w-[450px] flex text-xl border-[1px] border-gray-400 rounded-lg">
                        <input className="w-full border-0 outline-none focus:ring-0 p-2 font-light rounded-lg" type="text" name="search" placeholder="search"/>
                        <i className="fa-solid fa-magnifying-glass text-white p-4 rounded-lg bg-[#64CCC5]" aria-hidden></i>
                    </div>
                    <button className="cyan-button"><i className="fa-solid fa-upload" aria-hidden></i> Add Tour</button>
                </div>

                <div className="w-[95%] mx-auto p-12 bg-white shadow-xl">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Tour Name</th>
                                <th>Price</th>
                                <th>Edit Tour</th>
                                <th>Delete Tour</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Dubai Tour Package</td>
                                <td>₹299.00</td>
                                <td><button className="green-button">Edit</button></td>
                                <td><button className="red-button">Delete</button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Dubai Tour Package</td>
                                <td>₹299.00</td>
                                <td><button className="green-button">Edit</button></td>
                                <td><button className="red-button">Delete</button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Dubai Tour Package</td>
                                <td>₹299.00</td>
                                <td><button className="green-button">Edit</button></td>
                                <td><button className="red-button">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Tours;
