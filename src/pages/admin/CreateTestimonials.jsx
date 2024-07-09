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
            <div className="flex-[0_0_80%] w-full bg-gray-100 py-12">
                <form className="flex p-8 text-xl" method="POST">
                    <div className="adminSideForm">
                        <label className="mr-8" htmlFor="clientName">Client Name</label>
                        <input type="text" id="clientName" name="clientName" placeholder="Client Name" />

                        <label className="mr-8" htmlFor="rating">Ratings</label>
                        <StarSelection ref={starSelection} />
                        <label className="mr-8" htmlFor="reviews">Reviews</label>

                        <textarea id="reviews" rows="5" placeholder="Description..."></textarea>
                        <span></span>
                        <button className="green-button">Add Testimonial</button>
                    </div>
                </form>
            </div>
        </div>
 
    );
}

export default CreateTestimonials;
