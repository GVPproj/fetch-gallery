import SiteHeader from './components/SiteHeader'
import ImageGallery from './components/ImageGallery'
import { useEffect, useState } from 'react'

function App() {
   const [imagesData, setImagesData] = useState(null)
   const numberOfImages = 8

   useEffect(() => {
      const url = 'https://jsonplaceholder.typicode.com/photos'
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
            <div className="mx-auto h-64 w-96 max-w-full">
               {imagesData && <ImageGallery imagesData={imagesData} />}
            </div>
         </main>
      </>
   )
}

export default App
