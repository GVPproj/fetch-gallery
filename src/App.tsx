import SiteHeader from "./components/SiteHeader";
import ImageGallery from "./components/ImageGallery";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    let data = await response.json();
    const slicedArray = data.slice(0, 8);
    console.log(slicedArray);
  };
  return (
    <>
      <SiteHeader />
      <main>
        <ImageGallery text="hello world" />
      </main>
    </>
  );
}

export default App;
