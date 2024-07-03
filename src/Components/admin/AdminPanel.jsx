import react from 'react';
import {Link, useLocation} from 'react-router-dom';

const AdminPanel = ()=>{

    const location = useLocation();
    
    const links = {
        tours: location.pathname === "/admin/tours",
        testimonials: location.pathname === "/admin/testimonials",
        gallery: location.pathname === "/admin/gallery",
        booking: location.pathname === "/admin/booking",
        account: location.pathname === "/admin/account"
    }

    return (
        <div className="w-full flex flex-col p-8 text-xl">
            <h1 className="font-bold">Admin Panel </h1>

            <hr className="my-3 border border-solid border-gray-300"/>

            <ul className="py-8 [&>li]:mb-4">
                <li><Link className={links.tours?"admin-active-link":""} to="/admin/tours">Tours</Link></li>
                <li><Link className={links.testimonials?"admin-active-link":""} to="/admin/testimonials">Testimonial</Link></li>
                <li><Link className={links.gallery?"admin-active-link":""} to="/admin/gallery">Gallery</Link></li>
                <li><Link className={links.booking?"admin-active-link":""} to="/admin/booking">Booking</Link></li>
                <li><Link className={links.account?"admin-active-link":""} to="/admin/account">Account</Link></li>
            </ul>
        </div>
    );
}

export default AdminPanel;
