import react from "react";
import NavBar from "./NavBar" 
import {useEffect} from "react";


const Header = ()=>{




    const stickyNav = (header)=>{
        header.classList.add("mt-10");
        header.classList.remove("bg-black");
    }

    const normalNav = (header)=>{
        header.classList.remove("mt-10");
        header.classList.add("bg-black");
    }

    const changeNavPosition = (header)=>{
        if(window.scrollY < 60){
            stickyNav(header);
        }

        else{
            normalNav(header);
        }

    }

    useEffect(()=>{

        const header = document.querySelector("header");

        changeNavPosition(header);

        window.addEventListener("scroll", (event)=>{
            changeNavPosition(header);
        });


    }, []);

    return (
        <header className="w-full flex justify-center fixed z-[9999] md:py-2 mt-10 transition-[margin] duration-700">
            <NavBar/>
        </header>
    );
}


export default Header;
