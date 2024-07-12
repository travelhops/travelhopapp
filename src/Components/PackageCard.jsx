import react from "react";
import {Link} from "react-router-dom";


const PackageCard = (props)=>{

    return (
        <div className="card bg-white shadow-2xl rounded-lg duration-300 m-4" >
            <img src={props.pkg.bannerUrl} alt="" className="w-full rounded-lg" style={{aspectRatio:  16/9}} />
            <div className="py-2 px-4">
                <h1 className="uppercase text-xl xl:text-3xl lg:text-2xl">{props.pkg.destination}</h1>
                <p className="text-lg">{props.pkg.country}</p>
                <hr className="my-3 border border-solid border-gray-300"/>
                <div className="flex justify-between">
                    <h2 className="text-xl 2xl:text-2xl md:text-xl text-[#14B9D5]">{props.pkg.duration.day} Days / {props.pkg.duration.night} Nights </h2>
                    <h2 className="text-xl 2xl:text-2xl md:text-xl text-[#14B9D5]">₹{props.pkg.price}</h2>
                </div>
                <hr className="my-3 border border-solid border-gray-300"/>
                <p className="text-base text-justify text-gray-500 line-clamp-4">
                    {props.pkg.description}
               </p>
                <Link to={"/packages/"+props.pkg.id} className="flex text-base text-white bg-[#14B9D5] w-24 justify-center my-2 p-0.5 rounded-2xl cursor-pointer">
                    DETAILS
                </Link>
            </div>
        </div>

    );
}

export default PackageCard;
