import { useFetchGif } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
    // renombrar data => images
   const { data:images, loading } = useFetchGif(category);

   return (
      <>
         <h2 className="animate__animated animate__backInLeft ">{category}</h2>

         {loading && <p className="animate__animated animate__backInLeft">"Loading..."</p>}

         <div className='card-grid'>
            {images.map((img) => (
               <GifGridItem key={img.id} {...img} />
            ))}
         </div>
      </>
   );
};




// ==================================================
{
   /* <GifGridItem key={img.id} img={img} /> */
}

// useEffect(() => {
//     getGifs(category).then(setImages);
// .then((imgs) => setImages(imgs));
// Argumento mandado a la misma funcion, se puede omitir
//  }, [category]);
//    el hook de efecto se re renderizaria si
//    se cambia la categoria
