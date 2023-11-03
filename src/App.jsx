import { useState } from "react";
import { allimages } from "./assets/Images";
import ImageList from "./components/ImageList";
function App() {
  const [images, setImages] = useState(allimages);
  const totalSelectedImg = images.filter((image) => image.checked).length;

  const updateImage = (id) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, checked: !image.checked } : image
    );
    setImages(updatedImages);
  };

  const handleDelete = () => {
    setImages((images) => images.filter((image) => !image.checked));
  };
  return (
    <section className="bg-gray-200  w-full ">
      {/* container  */}
      <div className="container max-w-5xl  mx-auto   bg-white rounded-md ">
        {/* title  */}
        {totalSelectedImg > 0 ? (
          <div className="px-8 pb-3 pt-2 flex items-center justify-between">
            <p>
              <span>{totalSelectedImg}</span> files selected
            </p>
            <button
              className="px-2 py-1 font-semibold border-b text-red-800 "
              onClick={handleDelete}
            >
              Delete all images
            </button>
          </div>
        ) : (
          <h5 className="px-4 pt-2 pb-3">Gallery</h5>
        )}
        <hr />

        <ImageList images={images} onUpdateImage={updateImage} />
      </div>
    </section>
  );
}

export default App;
