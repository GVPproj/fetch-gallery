export default function ImageGallery({ imagesData }) {
  //   console.log(imagesData);
  return (
    <>
      {imagesData.map((img) => (
        <img key={img.id} src={img.url} />
      ))}
    </>
  );
}
