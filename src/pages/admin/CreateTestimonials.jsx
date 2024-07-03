import react from 'react';
import StarSelection from '../../Components/admin/StarSelection';
import AdminPanel from '../../Components/admin/AdminPanel';

const CreateTestimonials = ()=>{
    return (
        <div className="w-full flex">
            <div className="flex-[0_0_20%]">
                <AdminPanel/>
            </div>
            <div className="flex-[0_0_80%] bg-gray-100 py-12">
                <StarSelection/>
            </div>

        </div>
 
    );
}

export default CreateTestimonials;
