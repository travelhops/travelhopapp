import react from 'react';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import AdminPanel from '../../Components/admin/AdminPanel';
import FloatingMessage from '../../Components/FloatingMessage';
import StarSelection from '../../Components/admin/StarSelection';

import axios from 'axios';
import Cookies from 'js-cookie';

const TestimonialsAdmin = ()=>{


    const API_URL = process.env.API_URL;

    const navigate = useNavigate();

    const [testimonials, setTestimonials] = useState([]);

    const [floatingMessage, setFloatingMessage] = useState({});


    const handleFloatingMessage = (msg, color, time)=>{
        setFloatingMessage({msg: msg, color: color});

        setTimeout(()=>{
            setFloatingMessage({});
        }, time);
    }

    const getTestimonials = ()=>{
        axios.get(API_URL+"/api/getTestimonials").then(res=>{
            if(res.data.testimonials){
                setTestimonials(res.data.testimonials);
            }
        });
    }

    const createTestimonial = (event)=>{
        navigate('/admin/testimonials/create');
    }

    const deleteTestimonial = (testimonialId, index)=>{
        axios.delete(API_URL+"/api/deleteTestimonial/"+testimonialId, {
            headers:{
                'x-access-token': Cookies.get('token')
            }
        }).then(res=>{
            if(res.data.success){
                handleFloatingMessage("Testimonial Deleted", "bg-green-400", 4000);
                
                const newTestimonials = [...testimonials.slice(0, index), ...testimonials.slice(index+1, testimonials.length)];
                setTestimonials(newTestimonials);

            }
            else{
                handleFloatingMessage("Something went wrong", "bg-red-500", 4000);
            }
        });
    }

    useEffect(()=>{
        getTestimonials();
    }, []);

    return (
        <div className="w-full flex">
            <div className="flex-[0_0_20%]">
                <AdminPanel/>
            </div>

            {Object.keys(floatingMessage).length > 0?<FloatingMessage message={floatingMessage.msg} color={floatingMessage.color} />: ''}

            <div className="flex-[0_0_80%] bg-gray-100 py-12">
                <div className="w-[95%] mx-auto text-xl text-right py-8 [&>button]:ml-auto">
                    <button className="green-button" onClick={createTestimonial}>Create Testimonial</button>
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
                            {testimonials.length > 0?testimonials.map((testimonial, index)=>{
                                return (<tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{testimonial.clientName}</td>
                                            <td><StarSelection readOnly={true} starsCount={testimonial.rating} id={index}/></td>
                                            <td><button className="red-button" onClick={()=>{deleteTestimonial(testimonial._id, index)}}>Delete</button></td>
                                        </tr>
                                    );
                            }):""
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default TestimonialsAdmin;
