import react from "react";



const PackageCard = ()=>{
    return (
        <div className="card bg-white shadow-2xl rounded-lg duration-300 m-4">
            <img src="https://res.cloudinary.com/dfnpjjy2w/image/upload/v1714766891/bali.jpg" alt="" className="w-full rounded-lg" style={{aspectRatio:  16/9}} />
            <div className="py-2 px-4">
                <h1 className="text-xl xl:text-3xl lg:text-2xl">BALI</h1>
                <p className="text-lg">INDONESIA</p>
                <hr className="my-3 border border-solid border-gray-300"/>
                <div className="flex justify-between">
                    <h2 className="text-xl 2xl:text-2xl md:text-xl text-[#14B9D5]">3 Days / 4 Nights </h2>
                    <h2 className="text-xl 2xl:text-2xl md:text-xl text-[#14B9D5]">$12000</h2>
                </div>
                <hr className="my-3 border border-solid border-gray-300"/>
                <p className="text-base text-justify text-gray-500 line-clamp-4">
  Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast.
                </p>
                <span className="flex text-base text-white bg-[#14B9D5] w-24 justify-center my-2 p-0.5 rounded-2xl cursor-pointer">
                    DETAILS
                </span>
            </div>
        </div>

    )
}

export default PackageCard;
