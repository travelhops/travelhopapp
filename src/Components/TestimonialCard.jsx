import react from 'react';



const TestimonialCard = ()=>{
    return (
        <div className="testimonialCard bg-white flex-[0_0_calc(100%-2rem)] md:flex-[0_0_calc(50%-2rem)] lg:flex-[0_0_calc(33.33%-2rem)] flex flex-col items-center bg-white p-12 shadow-2xl rounded-xl w-[90%] md:w-[50%] min-[880px]:w-[30%] m-4 duration-500 transform">

            <p className="text-center font-poppins my-4 relative before:content-['\275D'] after:content-['\275E'] before:absolute after:absolute before:text-6xl after:text-6xl before:-top-12 before:-left-6 after:-right-6 after:-bottom-14 before:text-[#E96363] after:text-[#E96363]">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <h4 className="text-xl font-roboto mt-12 font-medium">Suyash Yadav</h4>
            <div className="text-[#14B9D5] text-xl">
                <i aria-hidden className="fa-solid fa-star"></i>
                <i aria-hidden className="fa-solid fa-star"></i>
                <i aria-hidden className="fa-solid fa-star"></i>
                <i aria-hidden className="fa-solid fa-star"></i>
            </div>

        </div>

    );
}


export default TestimonialCard;
