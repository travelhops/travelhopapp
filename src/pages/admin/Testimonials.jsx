import react from 'react';
import AdminPanel from '../../Components/admin/AdminPanel';

const Testimonials = ()=>{
    return (
        <div className="w-full flex">
            <div className="flex-[0_0_20%]">
                <AdminPanel/>
            </div>


            <div className="flex-[0_0_80%] bg-gray-100 py-12">
                <div className="w-[95%] mx-auto text-xl text-right py-8 [&>button]:ml-auto">
                    <button className="green-button">Create Testimonial</button>
                </div>
                <div className="w-[95%] mx-auto p-12 bg-white shadow-xl">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Client Name</th>
                                <th>Rating</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Suyash Yadav</td>
                                <td>Stars</td>
                                <th><button className="red-button">Delete</button></th>
                            </tr>
                             <tr>
                                <td>2</td>
                                <td>Suyash Yadav</td>
                                <td>Stars</td>
                                <th><button className="red-button">Delete</button></th>
                            </tr>                           
                            <tr>
                                <td>3</td>
                                <td>Suyash Yadav</td>
                                <td>Stars</td>
                                <th><button className="red-button">Delete</button></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default Testimonials;
