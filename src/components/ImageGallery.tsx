import { useState } from 'react'
import chevronLeft from '/chevronLeft.svg'
import chevronRight from '/chevronRight.svg'

export default function ImageGallery({ imagesData }: any) {
   const [index, setIndex] = useState(0)

   function decrement() {
      index === 0
         ? setIndex(imagesData.length - 1)
         : setIndex((prev) => prev - 1)
   }
   function increment() {
      index === imagesData.length - 1
         ? setIndex(0)
         : setIndex((prev) => prev + 1)
   }

   return (
      <>
         <p>Current Index: {index}</p>
         <div
            className="relative flex h-full w-full items-center justify-center gap-8
            rounded-lg border-4 border-neutral-100 bg-cover bg-center 
            shadow-md shadow-neutral-300"
            style={{ backgroundImage: `url(${imagesData[index].url})` }}
         >
            <button
               onClick={decrement}
               className=" absolute left-8 bg-neutral-100 bg-opacity-30"
            >
               <img src={chevronLeft} alt="Go left" />
            </button>
            <button
               onClick={increment}
               className="absolute right-8 bg-neutral-100 bg-opacity-30"
            >
               <img src={chevronRight} alt="Go right" />
            </button>
            <div className=" max-w-[85%] rotate-28 text-center sm:rotate-30">
               {imagesData[index].title}
            </div>
         </div>
      </>
   )
}
