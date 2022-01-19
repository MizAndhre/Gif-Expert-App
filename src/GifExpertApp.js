import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
   //    const categories = ["One Piece", "DGB", "One Punch Man"];

   const [categories, setCategories] = useState(["One Piece"]);

   return (
      <>
         <h1 className="animate__animated animate__bounce">GifExpertApp</h1>

         <AddCategory setCategories={setCategories} />

         <hr />

         <ol>
            {categories.map((category) => (
               <GifGrid 
                    key={category} 
                    category={category} 
               />
            ))}
         </ol>
      </>
   );
};

export default GifExpertApp;

// const handleAdd = () => {
//      setCategories([...categories, 'Hunter']);
//     setCategories((catgs) => [...catgs, "Hunter"]);
//  };

{
   /* <button onClick={handleAdd}> Agregar </button> */
}
