import react from 'react';



const GalleryPhoto = (props)=>{
    return (
        <div className={props.style || ''}>
            <img src = {props.url} className="w-full object-cover rounded-xl shadow-2xl"/>
        </div>
    );
}

export default GalleryPhoto;
