import { useState } from 'react'
import { motion } from 'framer-motion'
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
         <p className="mb-16">Current Index: {index}</p>
         <div
            className="relative flex h-full w-full items-center justify-center gap-8"
            // rounded-lg border-4 border-neutral-100
            // shadow-md shadow-neutral-300"
            // style={{ backgroundImage: `url(${imagesData[index].url})` }}
         >
            <button
               onClick={decrement}
               className="absolute left-8 z-10 bg-neutral-100 bg-opacity-30"
            >
               <img src={chevronLeft} alt="Go left" />
            </button>
            <button
               onClick={increment}
               className="absolute right-8 z-10 bg-neutral-100 bg-opacity-30"
            >
               <img src={chevronRight} alt="Go right" />
            </button>
            <motion.div className="absolute flex h-full w-full items-center justify-center">
               <div className="relative z-10 rotate-28 text-center sm:rotate-30">
                  {imagesData[index].title}
               </div>
               <img
                  className="absolute h-full w-full rounded-lg border-4 border-neutral-100 
                  object-cover shadow-md shadow-neutral-300"
                  src={imagesData[index].url}
               />
            </motion.div>
         </div>
      </>
   )
}
