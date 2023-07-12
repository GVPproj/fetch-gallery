import SiteHeader from './components/SiteHeader'
import ImageGallery from './components/ImageGallery'
import { useEffect, useState } from 'react'

function App() {
   const [imagesData, setImagesData] = useState([])

   useEffect(() => {
      const url = 'https://jsonplaceholder.typicode.com/albums/1/photos'
      fetchData(url)
   }, [])

   const fetchData = async (url: string) => {
      let response = await fetch(url)
      let data = await response.json()
      const slicedArray = await data.slice(0, 8)
      setImagesData(slicedArray)
   }

   return (
      <>
         <SiteHeader />
         <main>
            <div className="w-96 h-64 mx-auto">
               <ImageGallery imagesData={imagesData} />
            </div>
         </main>
      </>
   )
}

export default App