import React from "react";

export const GifGridItem = ({ id, title, url }) => {
//    console.log(id, title, url);

   return (
      <div className="card animate__animated animate__fadeInUp animate__delay-1s">
         <img src={url} alt={title} title={title} />
         {/* <p> {title} </p> */}
      </div>
   );
};
