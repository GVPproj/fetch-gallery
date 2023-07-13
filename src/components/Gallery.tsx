import { useState } from "react"
import { motion } from "framer-motion"
import chevronLeft from "/chevronLeft.svg"
import chevronRight from "/chevronRight.svg"
import GalleryImage from "./GalleryImage.tsx"

// @ts-ignore
import recursiveShuffle from "../utils/recursiveShuffle.js"

interface imageObject {
   albumId: number
   id: number
   thumbnailUrl: string
   title: string
   url: string
}

export default function ImageGallery({ imagesData }: any) {
   const [data, setData] = useState(imagesData)
   const [index, setIndex] = useState(0)

   function decrement() {
      index === 0 ? setIndex(data.length - 1) : setIndex((prev) => prev - 1)
   }
   function increment() {
      index === data.length - 1 ? setIndex(0) : setIndex((prev) => prev + 1)
   }

   return (
      <div className="flex h-full w-full flex-col">
         <div className="relative flex h-full w-full items-center justify-center">
            {index > 0 && (
               <button
                  onClick={decrement}
                  className="absolute left-0 z-10 h-5 w-5 bg-neutral-100 bg-opacity-50 sm:h-8 sm:w-8"
               >
                  <img src={chevronLeft} alt="Go left" />
               </button>
            )}
            {index < data.length - 1 && (
               <button
                  onClick={increment}
                  className="absolute right-0 z-10 h-5 w-5 bg-neutral-100 bg-opacity-50 sm:h-8 sm:w-8"
               >
                  <img src={chevronRight} alt="Go right" />
               </button>
            )}
            <div className="h-full w-full overflow-hidden">
               {/* setting transform: translateX property wih Framer motion
               we will use our index mutliplied by 100% of the w-full
               */}
               <motion.div
                  animate={{ x: `-${index * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="flex  h-full"
               >
                  {data.map((imageObject: imageObject) => {
                     return (
                        <GalleryImage
                           id={imageObject.id}
                           url={imageObject.url}
                           title={imageObject.title}
                        />
                        // <div
                        //    key={imageObject.id}
                        //    className="relative flex h-full w-full shrink-0 items-center justify-center"
                        // >
                        //    <div
                        //       className="absolute z-10 max-w-[24ch] rotate-45
                        //    rounded-full bg-neutral-800 bg-opacity-60 px-8 py-4
                        //    text-center text-sm font-semibold text-neutral-100 sm:text-base"
                        //    >
                        //       {imageObject.title}
                        //    </div>
                        //    <img
                        //       className="absolute h-5/6 w-5/6 rounded-lg
                        //       border-8 border-neutral-600 object-cover shadow-lg"
                        //       src={imageObject.url}
                        //       alt={imageObject.title}
                        //    />
                        // </div>
                     )
                  })}
               </motion.div>
            </div>
         </div>
         <button
            className=" transform self-center rounded-full bg-neutral-600 px-4 py-2 text-neutral-50 hover:bg-neutral-500 active:scale-90"
            onClick={() => {
               let newArr = recursiveShuffle(imagesData)
               setData(newArr)
            }}
         >
            Shuffle
         </button>
         {/* <p className="my-4 text-center">Photo #{index + 1}</p> */}
      </div>
   )
}
