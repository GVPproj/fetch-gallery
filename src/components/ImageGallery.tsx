import { useState } from "react"
import { motion } from "framer-motion"
import chevronLeft from "/chevronLeft.svg"
import chevronRight from "/chevronRight.svg"

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
         <div className="relative flex h-full w-full items-center justify-center ">
            <button
               onClick={decrement}
               className="absolute left-8 z-10 bg-neutral-100 bg-opacity-50"
            >
               <img src={chevronLeft} alt="Go left" />
            </button>
            <button
               onClick={increment}
               className="absolute right-8 z-10 bg-neutral-100 bg-opacity-50"
            >
               <img src={chevronRight} alt="Go right" />
            </button>
            <div className="h-full w-full overflow-hidden">
               {/* setting transform: translateX property wih Framer motion
               we will use our index mutliplied by 100% of the w-full
               */}
               <motion.div
                  animate={{ x: `-${index * 100}%` }}
                  transition={{ duration: 0.7 }}
                  className="flex h-full"
               >
                  {imagesData.map((imageObject: any) => {
                     return (
                        <div
                           key={imageObject.id}
                           className="relative flex h-full w-full shrink-0 items-center justify-center"
                        >
                           <div className="absolute z-10 rotate-28 text-neutral-100">
                              {imageObject.title}
                           </div>
                           <img
                              className="absolute h-full w-full rounded-lg 
                              border-8 border-neutral-600 object-cover"
                              src={imageObject.url}
                              alt={imageObject.title}
                           />
                        </div>
                     )
                  })}
               </motion.div>
            </div>
         </div>
         <p className="my-4 text-center">Photo #{index + 1}</p>
      </>
   )
}
