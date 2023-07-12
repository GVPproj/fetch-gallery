export default function ImageGallery({ imagesData }: any) {
  //   console.log(imagesData);
  return (
    <>
      {imagesData.map((img: any) => (
        <img key={img.id} src={img.url} />
      ))}
    </>
  );
}
