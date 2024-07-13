import react from 'react';
import { useRef, useEffect } from 'react';



const PackageCarousal = ({children, ...props})=>{

    let i = 0;
    //Index for large margin for cards


    const carousalRef = useRef(null);

    const getMarginIndex = ()=>{
        if(window.screen.width >= 1536)
            return 2;
        else if(window.screen.width >= 768 && window.screen.width < 1536)
            return 1;
        else
            return 0;
    }

    let marginIndex = getMarginIndex(); 

    useEffect(()=>{

        if(carousalRef.current.querySelectorAll(".card").length < 3){
            marginIndex = carousalRef.current.querySelectorAll(".card").length-1
        }

        if(props.reverse === "true"){

            carousalRef.current.classList.add("flex-row-reverse");
            carousalRef.current.scrollLeft = carousalRef.current.scrollLeftMax;
            carousalRef.current.querySelectorAll("button")[0].classList.add("hidden");

            if(marginIndex > 0)
                carousalRef.current.querySelectorAll(".card")[marginIndex].classList.add("ml-20")
        }
        else{
            carousalRef.current.querySelectorAll("button")[1].classList.add("hidden");

            if(marginIndex > 0)
                carousalRef.current.querySelectorAll(".card")[marginIndex].classList.add("mr-20")
        }

    }, []);





    const getMatrix = (card) => {

        let matrix = window.getComputedStyle(card).getPropertyValue("transform");
        matrix = matrix.substring(7, matrix.length - 1);
        matrix = matrix.split(",");
        matrix.forEach((value, index) => {
            matrix[index] = parseInt(value);
        });

        return matrix;
    };




    const leftButton = (event)=>{


        let numberOfCards = 1;
        if(window.screen.width >= 1536){
            numberOfCards = 3;
        }

        if(window.screen.width < 1280 && window.screen.width >= 768){
            numberOfCards = 2;
        }



        const carousal = carousalRef.current;
    
        const cardWidth = carousal.querySelector(".card").offsetWidth;
        
        const cards = carousal.querySelectorAll(".card");

        console.log(numberOfCards);

        if(i >= cards.length-numberOfCards)
                return;


        event.target.disabled = true;

        const margin = parseInt((window.getComputedStyle(cards[0]).marginBottom).substring(0, 2));

        let totalCardWidth = cardWidth+(margin*2);


        let matrix = getMatrix(cards[i]);

        cards[i].style.transform = `translateX(${matrix[4]}px) scale(0)`;
        cards[i].style.opacity = "0";



        if(props.reverse == "true"){
            totalCardWidth = -1*totalCardWidth;
            cards[i+marginIndex].classList.remove("ml-20");
            cards[i+marginIndex+1].classList.add("ml-20");
        }
        else{
            cards[i+marginIndex].classList.remove("mr-20");
            cards[i+marginIndex+1].classList.add("mr-20");
        }

        for(let j = i+1; j < cards.length; j++){
            matrix = getMatrix(cards[j]);
            const str = `translateX(${matrix[4]-totalCardWidth}px) scale(1)`;
            cards[j].style.transform = str;
        }


        i++;


        if(i > 0){
             if(props.reverse === "true")
                carousalRef.current.querySelectorAll("button")[0].classList.remove("hidden");
            else
                carousalRef.current.querySelectorAll("button")[1].classList.remove("hidden");

        }


        setTimeout(()=>{
            event.target.disabled = false;
        }, 500);



    }


    const rightButton = (event)=>{


        if(i <= 0){
            return;
        }

        i--;

        if(i == 0){
            if(props.reverse === "true")
                carousalRef.current.querySelectorAll("button")[0].classList.add("hidden");
            else
                carousalRef.current.querySelectorAll("button")[1].classList.add("hidden");

        }


        event.target.disabled = true;
        
        const carousal = event.target.parentNode.parentNode;
    
        const cardWidth = carousal.querySelector(".card").offsetWidth;
        
        const cards = carousal.querySelectorAll(".card");

        const margin = parseInt((window.getComputedStyle(cards[0]).marginLeft).substring(0, 2));

        let totalCardWidth = cardWidth+(margin*2);


        let matrix = getMatrix(cards[i]);

        cards[i].style.transform = `translateX(${matrix[4]}px) scale(1)`;
        cards[i].style.opacity = "1";


        if(props.reverse === "true"){
            totalCardWidth = -1*totalCardWidth;
            cards[i+marginIndex].classList.add("ml-20");
            cards[i+marginIndex+1].classList.remove("ml-20");
        }
        else{
            cards[i+marginIndex].classList.add("mr-20");
            cards[i+marginIndex+1].classList.remove("mr-20");
        }

        for(let j = i+1; j < cards.length; j++){
            matrix = getMatrix(cards[j]);
            const str = `translateX(${matrix[4]+totalCardWidth}px) scale(1)`;
            cards[j].style.transform = str;
        }


        setTimeout(()=>{
            event.target.disabled = false;
        }, 500);



    }


    return (
        <div className="carousal relative w-full lg:ml-12 px-6 md:px-12 pb-12 flex overflow-auto md:overflow-hidden flex-[65%] hideScrollbar [&>div]:flex-[0_0_calc(100%-2.4em)] [&>div]:2xl:flex-[0_0_calc(33.33%-2em)] [&>div]:md:flex-[0_0_calc(50%-1em)]" ref={carousalRef}>

            <button className="absolute h-14 w-14 hidden md:flex justify-center items-center top-1/2 left-0 z-10 p-4 bg-white/[0.5] rounded-full shadow-xl duration-300 hover:bg-[#14B9D5] hover:text-white" onClick={(props.reverse === "true")?rightButton: leftButton}><i aria-hidden className="fa-solid fa-arrow-left pointer-events-none"></i></button>

             {children}

            <button className="absolute h-14 w-14 hidden md:flex justify-center items-center top-1/2 right-0 z-10 p-4 bg-white/[0.5] rounded-full shadow-xl duration-300 hover:bg-[#14B9D5] hover:text-white" onClick={(props.reverse === "true")?leftButton: rightButton}><i aria-hidden className="fa-solid fa-arrow-right pointer-events-none"></i></button>

        </div>

    );
}


export default PackageCarousal;
