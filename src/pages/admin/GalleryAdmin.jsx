import react from 'react';
import AdminPanel from '../../Components/admin/AdminPanel';

const GalleryAdmin = ()=>{


    const imagesUrl = [
        "https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719605968/our-services-bg.webp",
        "https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719605968/our-services-bg.webp",
        "https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719605968/our-services-bg.webp",
        "https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719605968/our-services-bg.webp",
        "https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719605968/our-services-bg.webp",
        "https://res.cloudinary.com/dfnpjjy2w/image/upload/v1719605968/our-services-bg.webp"
    ];

    return (
        <div className="w-full flex">
            <div className="flex-[0_0_20%]">
                <AdminPanel/>
            </div>

            <div className="flex-[0_0_80%] bg-gray-100 py-12">
                <div className="w-[95%] flex items-center gap-4 mx-auto py-12">
                    <div className="w-[450px] h-[90px] relative bg-white border-[1px] border-gray-400 text-xl text-center">
                        <input className="absolute w-full h-full top-0 left-0 opacity-0" type="file" name="imageUpload" />
                        <span className="text-gray-400 leading-[90px]"><i className="fa-solid fa-upload" aria-hidden></i> Upload Photos</span>
                    </div>
                    <button className="text-xl text-white bg-[#64CCC5] p-4 rounded-lg shadow-lg">Add Image</button>
                </div>

                <div className="w-[95%] mx-auto p-12 bg-white shadow-xl">
                    <div className="w-full flex flex-wrap gap-2 [&>img]:w-[calc(100%-1em)] [&>img]:flex-[0_0_32.33%]">
                        {imagesUrl.map((url, index)=>(
                            <img src={url} key={index} alt="" />
                        ))}                   
                    </div>
                </div>
            </div>
        </div>

    );
}


export default GalleryAdmin;
