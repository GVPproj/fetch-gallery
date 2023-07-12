export default function ImageGallery({ imagesData }: any) {
   // console.log(imagesData)

   return (
      <>
         {imagesData.map((img: any) => (
            <div
               key={img.id}
               className="flex h-full w-full rounded-md bg-cover bg-center"
               style={{ backgroundImage: `url(${img.url})` }}
            ></div>
            // <img key={img.id} src={img.url} />
         ))}
      </>
   )
}
