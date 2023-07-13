import SiteHeader from "./components/SiteHeader"
import ImageGallery from "./components/ImageGallery"
// import recursiveShuffle from "./utils/recursiveShuffle.js"
import { useEffect, useState } from "react"

function App() {
   const [imagesData, setImagesData] = useState(null)
   const numberOfImages = 8

   useEffect(() => {
      const url = "https://jsonplaceholder.typicode.com/photos?albumId=1"
      fetchData(url)
   }, [])

   const fetchData = async (url: string) => {
      let response = await fetch(url)
      let data = await response.json()
      const slicedArray = await data.slice(0, numberOfImages)
      setImagesData(slicedArray)
   }

   return (
      <>
         <SiteHeader />
         <main>
            <div className="mx-auto h-[600px] w-[600px] max-w-full">
               {imagesData && <ImageGallery imagesData={imagesData} />}
            </div>
         </main>
         {/* <button
            onClick={() => {
               setImagesData(recursiveShuffle(imagesData))
               console.log(imagesData)
            }}
         >
            Shuffle
         </button> */}
      </>
   )
}

export default App
