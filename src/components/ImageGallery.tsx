// import { useState } from 'react'

export default function ImageGallery({ imagesData }: any) {
   //    const [index, setIndex] = useState(0)

   return (
      <>
         <div
            className="relative flex h-full w-full items-center justify-center 
            rounded-lg border-4 border-neutral-100 bg-cover bg-center 
            shadow-md shadow-neutral-300"
            style={{ backgroundImage: `url(${imagesData[1].url})` }}
         >
            <div className=" max-w-[85%] rotate-28 text-center sm:rotate-30">
               {imagesData[1].title}
            </div>
         </div>
      </>
   )
}
