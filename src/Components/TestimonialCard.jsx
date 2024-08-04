import react from 'react';
import StarSelection from '../Components/admin/StarSelection';



const TestimonialCard = (props)=>{

    return (
        <div className="testimonialCard bg-white flex-[0_0_calc(100%-2rem)] md:flex-[0_0_calc(50%-2rem)] lg:flex-[0_0_calc(33.33%-2rem)] flex flex-col items-center bg-white p-12 shadow-2xl rounded-xl w-[90%] md:w-[50%] min-[880px]:w-[30%] m-4 duration-500 transform">

            <p className="text-center font-poppins my-4 relative before:content-['\275D'] after:content-['\275E'] before:absolute after:absolute before:text-6xl after:text-6xl before:-top-12 before:-left-6 after:-right-6 after:-bottom-14 before:text-[#E96363] after:text-[#E96363]">
                {props.data.description}
            </p>
            <h4 className="text-xl font-roboto mt-12 font-medium">{props.data.clientName}</h4>

            <StarSelection readOnly={true} starsCount={props.data.rating} id={props.index}/>

        </div>

    );
}


export default TestimonialCard;
