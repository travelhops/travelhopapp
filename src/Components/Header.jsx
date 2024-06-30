import react from "react";
import NavBar from "./NavBar" 
import {useEffect} from "react";


const Header = ()=>{




    const stickyNav = (header)=>{
        header.classList.add("pt-20");
        header.classList.remove("py-2");
        header.classList.remove("bg-black");
    }

    const normalNav = (header)=>{
        header.classList.remove("pt-20");
        header.classList.add("py-2");
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
        <header className="w-screen flex justify-center fixed z-[9999] pt-20 transition-[padding] duration-700">
            <NavBar/>
        </header>
    );
}


export default Header;
