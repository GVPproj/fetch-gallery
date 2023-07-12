import SiteHeader from "./components/SiteHeader";
import ImageGallery from "./components/ImageGallery";

function App() {
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
