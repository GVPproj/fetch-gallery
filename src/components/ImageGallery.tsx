export default function ImageGallery({ imagesData }: any) {
   // console.log(imagesData)

   return (
      <>
         {imagesData.map((img: any) => (
            <div
               key={img.id}
               className="w-full h-full bg-center rounded-md bg-cover"
               style={{ backgroundImage: `url(${img.url})` }}
            ></div>
            // <img key={img.id} src={img.url} />
         ))}
      </>
   )
}
