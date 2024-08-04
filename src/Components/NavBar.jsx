import react from "react";
import Logo from "./../assets/travelhoptours.png";
import {Link} from "react-router-dom";
const NavBar = ()=>{


    const menuButton = (event)=>{
        const ul = document.querySelector("nav ul");
        if(event.target.checked){
            ul.classList.add("menu-animation-open");
            ul.classList.remove("menu-animation-close");
            ul.classList.remove('translate-x-[150%]');
        }
        else{
            ul.classList.remove("menu-animation-open");
            ul.classList.add("menu-animation-close");
            ul.classList.add('translate-x-[150%]');
        }
    }

    return (
        <nav className="container flex w-9/12 items-center">
            <img src={Logo} className="w-20 md:w-24 ml-4 md:ml-0"/>
            <ul className="absolute transform translate-x-[150%] md:translate-x-0 left-0 top-0 p-12 bg-[#051E30] w-screen h-screen md:h-auto md:w-auto text-lg md:p-0 md:ml-auto *:p-4 text-white text-xl md:flex md:static md:bg-transparent md:py-0  text-nowrap duration-500" >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/packages">Packages</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contactUs">Contact Us</Link></li>
            </ul>
            <div className="md:hidden menu-button flex w-[2rem] h-[2rem] justify-center items-center mr-4 ml-auto">
                <input type='checkbox' id='toggle' onClick={menuButton}/>
                <label htmlFor='toggle' ></label>
            </div>
        </nav>
    );
}


export default NavBar;
