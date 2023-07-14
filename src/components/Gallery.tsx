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
   const [numberOfImages, setNumberOfImages] = useState(5)
   const [data, setData] = useState(imagesData.slice(0, numberOfImages))
   const [index, setIndex] = useState(0)
   const [shuffleButtonText, setShuffleButtonText] = useState("Shuffle")

   function decrement() {
      index === 0 ? setIndex(data.length - 1) : setIndex((prev) => prev - 1)
   }
   function increment() {
      index === data.length - 1 ? setIndex(0) : setIndex((prev) => prev + 1)
   }
   function handleShuffleClick() {
      setShuffleButtonText("Shuffling...")
      setTimeout(() => {
         let newArr = recursiveShuffle(imagesData.slice(0, numberOfImages))
         setData(newArr)
         setIndex(0)
         setShuffleButtonText("Shuffle")
      }, 800)
   }

   function handleIncrement() {
      setNumberOfImages((previous) => previous + 1)
      setData(imagesData.slice(0, numberOfImages + 1))
   }

   return (
      <>
         <div className="flex h-full w-full flex-col gap-4">
            <div className="relative flex h-full min-h-[500px] w-full items-center justify-center">
               {index > 0 && (
                  <button
                     onClick={decrement}
                     className="absolute left-0 z-10 h-8 w-8 
                              rounded border border-neutral-400 bg-neutral-200 
                              bg-opacity-50 active:scale-90 sm:h-8 sm:w-8"
                  >
                     <img src={chevronLeft} alt="Go left" />
                  </button>
               )}
               {index < data.length - 1 && (
                  <button
                     onClick={increment}
                     className="absolute right-0 z-10 h-8 w-8 
                                rounded border border-neutral-400 bg-neutral-200 
                                bg-opacity-50 active:scale-90"
                  >
                     <img src={chevronRight} alt="Go right" />
                  </button>
               )}
               <div className="h-full w-full overflow-hidden">
                  {/* setting 'transform: translateX' CSS property wih Framer motion
                      we will use our stateful index mutliplied by 100% of the div width */}
                  <motion.div
                     animate={{ x: `-${index * 100}%` }}
                     transition={{ duration: 0.5 }}
                     className="flex h-full"
                  >
                     {data.map(({ id, url, title }: imageObject) => {
                        return <GalleryImage id={id} url={url} title={title} />
                     })}
                  </motion.div>
               </div>
            </div>
            <div className="flex w-full justify-center gap-4 py-2">
               {numberOfImages < 50 && (
                  <button
                     onClick={handleIncrement}
                     className="transform self-center rounded-full bg-neutral-600 px-4 py-2
               text-neutral-50 transition-colors hover:bg-neutral-500 
               active:scale-90 md:px-8 md:py-4 md:text-xl"
                  >
                     Add Image
                  </button>
               )}
               <button
                  className="transform self-center rounded-full bg-neutral-600 px-4 py-2 text-neutral-50 transition-colors hover:bg-neutral-500 active:scale-90 md:px-8 md:py-4 md:text-xl"
                  onClick={handleShuffleClick}
               >
                  {shuffleButtonText}
               </button>
            </div>

            <div className="mb-8 mt-2">
               <h1 className="text-center text-xl font-semibold">
                  Current Order:
               </h1>
               <p className="p-4 text-center">
                  {data.map((img: imageObject) => (
                     <span>{img.id} </span>
                  ))}
               </p>
            </div>
         </div>
      </>
   )
}
