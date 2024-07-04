import react from 'react';
import {useEffect, forwardRef, useImperativeHandle} from 'react';

const StarSelection = (props, ref)=>{

    
    let stars = 0;

    const setStars = (input, inputs)=>{
        const index = parseInt(input.getAttribute("data-index"))-1;

        for(let i = 0; i <= index; i++){
            inputs[i].checked = true;
        }
        
        for(let i = index+1; i < inputs.length; i++){
            inputs[i].checked = false;
        }

        stars = index+1;

    }


    const getStars = ()=>{
        return stars;
    }

    useImperativeHandle(ref, () => ({
        getStars
    }));

    




    useEffect(()=>{
        const inputs = document.querySelectorAll(".starContainer input");
        Array.from(inputs).forEach((input)=>{
            input.addEventListener("click", (event)=>{
                setStars(event.target, inputs);
                console.log(getStars());
            });
        });
    },[]);

    return (
        <div className="starContainer" ref={ref}>
            <input type="checkbox" id="star1" data-index="1" />
            <label htmlFor="star1">
                <i className="fa-solid fa-star" aria-hidden></i>
            </label>

            <input type="checkbox" id="star2" data-index="2" />
            <label htmlFor="star2">
                <i className="fa-solid fa-star" aria-hidden></i>
            </label>

            <input type="checkbox" id="star3" data-index="3" />
            <label htmlFor="star3">
                <i className="fa-solid fa-star" aria-hidden></i>
            </label>

            <input type="checkbox" id="star4" data-index="4" />
            <label htmlFor="star4">
                <i className="fa-solid fa-star" aria-hidden></i>
            </label>

            <input type="checkbox" id="star5" data-index="5" />
            <label htmlFor="star5">
                <i className="fa-solid fa-star" aria-hidden></i>
            </label>
        </div>
    );
}


export default forwardRef(StarSelection);
