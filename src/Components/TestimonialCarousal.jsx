import react from 'react';
import { useEffect, useRef } from 'react';

const TestimonialCarousal = ({children})=>{

    const testimonialRef = useRef(null);

    let slides = 0;
    let autoPlayTimeout = null;

    const getTranslateX = (card)=>{
        let matrix = window.getComputedStyle(card).getPropertyValue("transform");

        matrix = matrix.substring(7, matrix.length-1).split(",");

        return parseInt(matrix[4]);
    }
    

    const numberOfCards = ()=>{

        if(window.screen.width >= 1024)
            return 3;
        if(window.screen.widh < 1024 && window.screen.width >= 768)
            return 2;

        return 1;
    }


    const autoPlay = ()=>{


        const cards = testimonialRef.current.querySelectorAll(".testimonialCard");
        const cardWidth = cards[0].offsetWidth + parseInt(window.getComputedStyle(cards[0]).marginLeft.substring(0, 2))*2;


        if(slides > cards.length-numberOfCards()){
            slides = 0;
        }

        for(let i = 0; i < cards.length; i++){
            const translateX =  getTranslateX(cards[i])-cardWidth;
            cards[i].style.transform = `translateX(${(slides == 0)?0:translateX}px)`;
        }


        slides++;

        autoPlayTimeout = setTimeout(autoPlay, 5000);
    }

    const leftButton = (event)=>{


        const cards = testimonialRef.current.querySelectorAll(".testimonialCard");
        const cardWidth = cards[0].offsetWidth + parseInt(window.getComputedStyle(cards[0]).marginLeft.substring(0, 2))*2;


        if(slides > cards.length-numberOfCards())
            return;

        event.target.disabled = true;

        clearTimeout(autoPlayTimeout);

        for(let i = 0; i < cards.length; i++){
            const translateX =  getTranslateX(cards[i])-cardWidth;
            cards[i].style.transform = `translateX(${translateX}px)`;
        }

        slides++;

        autoPlayTimeout = setTimeout(autoPlay, 5000);

         setTimeout(()=>{
            event.target.disabled = false;
        }, 500);
    }


    const rightButton = (event)=>{


        if(slides == 0 || slides == 1)
            return;


        const cards = testimonialRef.current.querySelectorAll(".testimonialCard");
        const cardWidth = cards[0].offsetWidth + parseInt(window.getComputedStyle(cards[0]).marginLeft.substring(0, 2))*2;
        

        event.target.disabled = true;
        clearTimeout(autoPlayTimeout);

        for(let i = 0; i < cards.length; i++){
            const translateX =  getTranslateX(cards[i])+cardWidth;
            cards[i].style.transform = `translateX(${translateX}px)`;
        }

        slides--;

        autoPlayTimeout = setTimeout(autoPlay, 5000);


        setTimeout(()=>{
            event.target.disabled = false;
        }, 500);

    }
       
    useEffect(()=>{

        autoPlay();
        let clientX = 0;
        testimonialRef.current.addEventListener("touchstart", (event)=>{
            clientX = event.touches[0].clientX;
        });
        testimonialRef.current.addEventListener("touchend", (event)=>{

            if(event.changedTouches[0].clientX > clientX){
                rightButton(event);
            }
            else if(event.changedTouches[0].clientX < clientX){
                leftButton(event);
            }

        });

        return ()=>{
            clearTimeout(autoPlayTimeout);
        }

    },[]);

    return (
        <div ref={testimonialRef} className="w-[85%] flex items-center overflow-hidden overflow-y-visible pb-12 hideScrollbar">

            {children}

            <button className="absolute hidden md:block left-0 p-4 ml-4 bg-white/[0.5] rounded-full shadow-xl duration-300 hover:bg-[#14B9D5] hover:text-white" onClick={leftButton}><i aria-hidden className="fa-solid fa-arrow-left pointer-events-none"></i></button>
            <button className="absolute hidden md:block right-0 p-4 mr-4 bg-white/[0.5] rounded-full shadow-xl duration-300 hover:bg-[#14B9D5] hover:text-white" onClick={rightButton}><i aria-hidden className="fa-solid fa-arrow-right pointer-events-none"></i></button>

        </div>

    );
}


export default TestimonialCarousal;
