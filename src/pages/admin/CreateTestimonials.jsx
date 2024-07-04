import react from 'react';
import {useEffect, useRef} from 'react';
import StarSelection from '../../Components/admin/StarSelection';
import AdminPanel from '../../Components/admin/AdminPanel';

const CreateTestimonials = ()=>{
    const starSelection = useRef(null);

    useEffect(()=>{
    },[]);

    const getStars = ()=>{
        console.log(starSelection.current.getStars());
    }

    return (
        <div className="w-full flex">
            <div className="flex-[0_0_20%]">
                <AdminPanel/>
            </div>
            <div className="flex-[0_0_80%] bg-gray-100 py-12">
                <StarSelection ref={starSelection}/>
            </div>

            <button onClick={getStars}>Get</button>

        </div>
 
    );
}

export default CreateTestimonials;
