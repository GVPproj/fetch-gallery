import { useState } from 'react'

export default function ImageGallery({ imagesData }: any) {
   const [index, setIndex] = useState(0)

   return (
      <>
         <div
            className="relative flex h-full w-full items-center justify-center rounded-md border-4 border-neutral-100 bg-cover bg-center shadow-md shadow-neutral-300"
            style={{ backgroundImage: `url(${imagesData[index].url})` }}
         >
            <div className="absolute max-w-[85%] rotate-30 text-center">
               {imagesData[index].title}
            </div>
         </div>
      </>
   )
}
