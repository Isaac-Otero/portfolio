import React from "react";

const Artist =({artist})=>{
    if(!artist) return null;

    const {images,name,followers}=artist;

   
    return (
        <div>
            <img className="artist-image" src={images[0].url} alt='artist-profile'/>
            <h3 className="name" >{name}</h3>
            <p className="followers"> {followers.total} followers</p>
        
        </div>

    )
}

export default Artist;
