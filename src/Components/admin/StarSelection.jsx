import react from 'react';
import {useEffect, useRef, forwardRef, useImperativeHandle} from 'react';

const StarSelection = (props, ref)=>{

    const stars = useRef(0);

    const setStars = (index, inputs)=>{

        for(let i = 0; i <= index; i++){
            inputs[i].checked = true;
        }
        
        for(let i = index+1; i < inputs.length; i++){
            inputs[i].checked = false;
        }

        stars.current = index+1;
    }


    const getStars = ()=>{
        return stars.current;
    }


    useImperativeHandle(ref, () => ({
        getStars
    }));

    




    useEffect(()=>{
        const inputs = document.querySelectorAll(`#starContainer${props.id} input`);

        if(props.readOnly){
            stars.current = props.starsCount;
            setStars(stars.current-1, inputs);
        }

        Array.from(inputs).forEach((input)=>{
            input.addEventListener("click", (event)=>{
                if(!props.readOnly)
                    setStars(parseInt(event.target.getAttribute("data-index"))-1, inputs);
            });
        });
    },[]);

    return (
        <div className="starContainer" ref={ref} id={"starContainer"+props.id}>
            <input type="checkbox" id="star1" data-index="1" disabled={props.readOnly || false}/>
            <label htmlFor="star1">
                <i className="fa-solid fa-star" aria-hidden></i>
            </label>

            <input type="checkbox" id="star2" data-index="2" disabled={props.readOnly || false}/>
            <label htmlFor="star2">
                <i className="fa-solid fa-star" aria-hidden></i>
            </label>

            <input type="checkbox" id="star3" data-index="3" disabled={props.readOnly || false}/>
            <label htmlFor="star3">
                <i className="fa-solid fa-star" aria-hidden></i>
            </label>

            <input type="checkbox" id="star4" data-index="4" disabled={props.readOnly || false}/>
            <label htmlFor="star4">
                <i className="fa-solid fa-star" aria-hidden></i>
            </label>

            <input type="checkbox" id="star5" data-index="5" disabled={props.readOnly || false}/>
            <label htmlFor="star5">
                <i className="fa-solid fa-star" aria-hidden></i>
            </label>
        </div>
    );
}


export default forwardRef(StarSelection);
