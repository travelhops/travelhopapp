import react from 'react';
import {useState, useEffect} from 'react';
import AdminPanel from '../../Components/admin/AdminPanel';
import FloatingMessage from '../../Components/FloatingMessage';

import Cookies from 'js-cookie';

import axios from 'axios';


const CreateTours = ()=>{


    const API_URL = process.env.API_URL;

    const [bannerImg, setBannerImg] = useState();
    const [tourName, setTourName] = useState();
    const [country, setCountry] = useState();
    const [packageType, setPackageType] = useState('default');
    const [price, setPrice] = useState();
    const [paxType, setPaxType] = useState();
    const [paxSize, setPaxSize] = useState({});
    const [duration, setDuration] = useState({});
    const [description, setDescription] = useState();
    const [includes, setIncludes] = useState([]);
    const [excludes, setExcludes] = useState([]);
    const [tourPlan, setTourPlan] = useState([]);
    const [images, setImages] = useState([]);
    const [isTopPackage, setIsTopPackage] = useState(false);

    const [floatingMessage, setFloatingMessage] = useState({});


    const handleBannerImgChange = (event)=>{
        const temp = event.target.files[0];
        setBannerImg(temp);

        const objectUrl = URL.createObjectURL(temp);

        const img = document.createElement('img');
        img.classList.add("inline");
        img.classList.add("w-24");
        img.classList.add("object-cover");
        img.setAttribute("src", objectUrl);
        img.style.aspectRatio = "1/1";

        event.target.parentElement.appendChild(img);

        URL.revokeObjectURL(objectUrl);
    }

    const handleTourNameChange = (event)=>{
        const temp = event.target.value;
        setTourName(temp);
    }

    const handleCountryChange = (event)=>{
        const temp = event.target.value;
        setCountry(temp);
    }

    const handlePackageTypeChange = (event)=>{
        const temp = event.target.value;
        setPackageType(temp);
    }

    const handlePriceChange = (event)=>{
        const temp = parseInt(event.target.value);
        setPrice(temp);
    }

    const handlePaxTypeChange = (event)=>{
        const temp = event.target.value;
        setPaxType(temp);
    }

    const handlePaxSizeChange = (event)=>{
        const temp = paxSize;
        temp[event.target.id] = parseInt(event.target.value);

        setPaxSize(temp);
    }

    const handleDurationChange = (event)=>{
        const temp = duration;
        temp[event.target.id] = parseInt(event.target.value);
        setDuration(temp);
    }

    const handleDescriptionChange = (event)=>{
        const temp = event.target.value;
        setDescription(temp);
    }


    const addIncludes = (event)=>{
        const temp = includes;
        temp.push("");
        setIncludes([...temp]);
    }

    const addExcludes = (event)=>{
        const temp = excludes;
        temp.push("");
        setExcludes([...temp]);

    }

    const handleIncludesChange = (event)=>{
        const index = parseInt(event.target.getAttribute("index"));
        const temp = includes;
        temp[index] = event.target.value;
        setIncludes([...temp]);
    }

    const handleExcludesChange = (event)=>{
        const index = parseInt(event.target.getAttribute("index"));
        const temp = excludes;
        temp[index] = event.target.value;
        setExcludes([...temp]);
    }


    const addTourPlan = (event)=>{
        const temp = tourPlan;
        temp.push("");
        setTourPlan([...temp]);
    }

    const handleTourPlanChange = (event)=>{
        const index = parseInt(event.target.getAttribute("index"));
        const temp = tourPlan;
        temp[index] = event.target.value;
        setTourPlan([...temp]);
    }

    const handleImagesChange = (event)=>{
        const temp = event.target.files;

        const imagesDiv = document.getElementById("imagesDiv");

        if(temp.length > 5){
            imagesDiv.append("Maximum 5 images are allowed");
            return;
        }

        const arr = [];

        Array.from(temp).forEach((file)=>{
            arr.push(file);

            const objectUrl = URL.createObjectURL(file);

            const img = document.createElement('img');
            img.classList.add("inline");
            img.classList.add("w-24");
            img.classList.add("object-cover");
            img.classList.add("mr-4");
            img.style.aspectRatio = "1/1";
            img.setAttribute("src", objectUrl);

            imagesDiv.appendChild(img);

            URL.revokeObjectURL(objectUrl);

        });
        setImages([...arr]);
    }

    const handleIsTopChange = (event)=>{
        const temp = event.target.checked;
        setIsTopPackage(temp);
    }


    const handleFloatingMessage = (msg, color, time)=>{
        setFloatingMessage({msg: msg, color: color});

        setTimeout(()=>{
            setFloatingMessage({});
        }, time);
    }


    const handleSubmit = (event)=>{
        event.preventDefault();


       const formData = new FormData();
        formData.append('bannerImg', bannerImg);
        formData.append('tourName', tourName);
        formData.append('country', country);
        formData.append('packageType', packageType);
        formData.append('price', price);
        formData.append('paxType', paxType);
        formData.append('paxSize', JSON.stringify(paxSize));
        formData.append('duration', JSON.stringify(duration));
        formData.append('description', description);
        formData.append('includes', JSON.stringify(includes));
        formData.append('excludes', JSON.stringify(excludes));
        formData.append('tourPlan', JSON.stringify(tourPlan));
        formData.append('isTopPackage', isTopPackage);


        images.forEach((img)=>{
            formData.append('images', img);
        });

        console.log(Cookies.get('token'));

        const config = {
            headers: {
                'content-type' : 'multipart/form-data',
                'x-access-token': Cookies.get('token')
            }
        };

        handleFloatingMessage("Creating...", "bg-cyan-500", 5000);

        axios.post(API_URL+"/api/createPackage", formData, config).then(res=>{
            if(res.data.success){
                handleFloatingMessage("New Tour Create", "bg-green-400", 4000);
            }
            else{
                handleFloatingMessage("Something wrong occured", "bg-red-500", 4000);
            }
        });
    }


    return (

        <div className="w-full flex">
            <div className="flex-[0_0_20%]">
                <AdminPanel/>
            </div>

            {Object.keys(floatingMessage).length > 0?<FloatingMessage message={floatingMessage.msg} color={floatingMessage.color} />: ''}

            <div className="flex-[0_0_80%] w-full bg-gray-100 py-12">
                <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data" className="p-8 text-xl [&>hr]:w-[90%] [&>hr]:text-gray-400 [&>hr]:border-solid [&>hr]:border-[1px] [&>hr]:my-12">

                    <div className="adminSideForm">
                        <label>Banner Image</label>
                        <div>
                            <label htmlFor="bannerImg" className="cyan-button">Upload Photo</label>
                            <input type="file" accept=".jpeg, .jpg, .png, .webp" multiple={false} onChange={handleBannerImgChange} id="bannerImg" className="opacity-0"/>
                        </div>

                        <label htmlFor="tourName">Tour Name:</label>
                        <input type="text" id="tourName" placeholder="Tour Name" onChange={handleTourNameChange} required/>

                        <label htmlFor="country">Country:</label>
                        <div>
                            <input type="text" id="country" placeholder="Country" onChange={handleCountryChange} required/>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <select value={packageType} className="p-3 bg-white border-[1px] border-gray-400" onChange={handlePackageTypeChange}>
                                <option value="default" disabled >Domestic/Internation</option>
                                <option value="international">International</option>
                                <option value="domestic">Domestic</option>
                            </select>
                        </div>
                    </div>

                        
                    <hr/>
        

                    <div className="adminSideForm">
                        <label htmlFor="price">Price:</label>
                        <div>
                            <input type="text" id="price" placeholder="Price" onChange={handlePriceChange} required/>
                            <div className="[&>input]:w-fit [&>input]:text-green-600 mt-2">
                                <input type="radio" value="person" id="person" name="paxType" onChange={handlePaxTypeChange}/>
                                <label htmlFor="person">*person</label>
                                &nbsp;&nbsp;&nbsp;
                                <input type="radio" value="group" id="group" name="paxType" onChange={handlePaxTypeChange}/>
                                <label htmlFor="group">*group</label>
                            </div>
                        </div>


                        <label htmlFor="paxSize">Pax Size:</label>
                        <div className="[&>input]:w-[100px]">
                            <input type="text" id="minPax" placeholder="Min Pax" onChange={handlePaxSizeChange} required/>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text" id="maxPax" placeholder="Max Pax" onChange={handlePaxSizeChange} required/>
                        </div>


                        <label htmlFor="duration">Duration:</label>
                        <div className="[&>input]:w-[100px]">
                            <label htmlFor="days">Day(s)</label>
                            <input type="text" id="day" placeholder="" onChange={handleDurationChange} required/>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <label htmlFor="nights">Night(s)</label>
                            <input type="text" id="night" placeholder="" onChange={handleDurationChange} required/>
                        </div>
                    </div>


                    <hr/>

                    <div className="adminSideForm">
                        <label htmlFor="description" className="self-baseline">Description</label>
                        <textarea id="description" rows="5" placeholder="Overview of the trip..." className="w-[600px]" onChange={handleDescriptionChange} required></textarea>
                    </div>

                    <hr/>

                    <div className="adminSideForm">
                        <label htmlFor="" className="self-baseline">Include/Excludes:</label>
                        <div className="flex gap-4">
                            <div>

                                {includes.map((item, index)=>{
                                    return (<><input type="text" index={index} placeholder="Add Includes" value={item} onChange={handleIncludesChange} className="mb-4" required/><br/></>)
                                })}

                                <button type="button" onClick={addIncludes}>Add Includes</button>

                            </div>

                            <div>

                                 {excludes.map((item, index)=>{
                                     return (<><input type="text" index={index} placeholder="Add Excludes" value={item} onChange={handleExcludesChange} className="mb-4" required/><br/></>)
                                })}
                                <button type="button" onClick={addExcludes}>Add Excludes</button>

                            </div>
                        </div>
                    </div>

                    <hr/>

                    <div className="adminSideForm">
                        <label htmlFor="" className="self-baseline">Tour Plan:</label>

                        <div>
                            {tourPlan.map((item, index)=>{
                                return (
                                    <>
                                        <input text="text" readOnly={true} value={"Day "+(index+1)} className="mb-4" />
                                        <br/>
                                        <textarea index={index} placeholder="Description..." value={item} onChange={handleTourPlanChange} className="w-[500px] mb-6" required></textarea>
                                        <br/>
                                    </>
                                    )
                            })} 
                            <button type="button" onClick={addTourPlan} className="mt-4">+ Add Days</button>
                        </div>
                    </div>


                    <hr/>

                    <div className="adminSideForm mb-24">
                        <label htmlFor="" className="self-baseline">Images:</label>

                        <div>
                            <div className="relative w-[500px] h-[200px] border-[1px] border-gray-400 bg-white text-gray-500">
                                <label htmlFor="images" className="absolute !w-full h-full text-center leading-[200px]">Upload Photos</label>
                                <input type="file" accept=".jpeg, .jpg, .png, .webp" id="images" multiple={true} className="opacity-0" onChange={handleImagesChange}/>
                            </div>
                            <div id="imagesDiv" className="mt-4">
                            </div>
                        </div>

                    </div>

                    <input type="checkbox" id="isTopPackage" onChange={handleIsTopChange} />
                    &nbsp;
                    <label htmlFor="isTopPackage" className="text-gray-500">Add to Top Packages</label>
                    <br/>
                    <br/>
                    <button className="cyan-button">Create Tour Package</button>
                </form>


            </div>
        </div>
    );
}


export default CreateTours;
