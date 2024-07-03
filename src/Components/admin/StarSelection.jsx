import react from 'react';


const StarSelection = ()=>{


    const allInputs = document.querySelector(".starContainer input[type='checkbox']");

    const setStars = (input)=>{
        console.log(input);
    }

    Array.from(allInputs).forEach((input)=>{
        input.addEventListener("click", (event)=>{
            setStars(event.target);
        })
    });

    return (
        <div className="starContainer">
            <input type="checkbox" id="star1" data-index="1" />
            <label htmlFor="star1">
                <i className="fa-solid fa-star"></i>
            </label>

            <input type="checkbox" id="star2" data-index="2" />
            <label htmlFor="star2">
                <i className="fa-solid fa-star"></i>
            </label>

            <input type="checkbox" id="star3" data-index="3" />
            <label htmlFor="star3">
                <i className="fa-solid fa-star"></i>
            </label>

            <input type="checkbox" id="star4" data-index="4" />
            <label htmlFor="star4">
                <i className="fa-solid fa-star"></i>
            </label>

            <input type="checkbox" id="star5" data-index="5" />
            <label htmlFor="star5">
                <i className="fa-solid fa-star"></i>
            </label>
        </div>
    );
}


export default StarSelection;
