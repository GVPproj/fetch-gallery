import SiteHeader from "./components/SiteHeader"
import Gallery from "./components/Gallery"

import { useEffect, useState } from "react"

function App() {
   const [imagesData, setImagesData] = useState(null)
   const url = "https://jsonplaceholder.typicode.com/photos?albumId=1"

   useEffect(() => {
      const fetchData = async (url: string) => {
         let response = await fetch(url)
         let data = await response.json()
         setImagesData(data)
      }

      fetchData(url).catch(console.error)
   }, [])

   return (
      <>
         <SiteHeader />
         <main>
            <div className="mx-auto h-[600px] w-[600px] max-w-full">
               {imagesData && <Gallery imagesData={imagesData} />}
            </div>
         </main>
      </>
   )
}

export default App
