import { useRef, useState } from "react";
import { allimages } from "./assets/Images";
import ImageList from "./components/ImageList";
function App() {
  const [images, setImages] = useState(allimages);
  const totalSelectedImg = images.filter((image) => image.checked).length;

  const dragImg = useRef(null);
  const dragOverImg = useRef(null);

  // update the !checked status of  image
  const updateImage = (id) => {
    // console.log("alert");
    const updatedImages = [...images].map((image) =>
      image.id === id ? { ...image, checked: !image.checked } : image
    );
    setImages(updatedImages);
  };
  //delete the selected images
  const handleDelete = () => {
    // console.log("alert");
    setImages((images) => [...images].filter((image) => !image.checked));
  };

  // sort after drag event end
  const dragEnd = () => {
    console.log(dragImg, dragOverImg);
    const updatedImages = [...images];

    // Remove the dragged item
    const [draggedImg] = updatedImages.splice(dragImg.current, 1);
    // console.log(draggedItem, updatedItems);
    // Insert it at the new position

    updatedImages.splice(dragOverImg.current, 0, draggedImg);

    // Update the source and target indices
    dragImg.current = null;
    dragOverImg.current = null;

    // Update the state with the reordered array
    // console.log(updatedItems);
    setImages(updatedImages);
  };
  return (
    <section className="bg-gray-200  w-full md:h-screen p-3 ">
      {/* container  */}
      <div className="container max-w-5xl  mx-auto   bg-white rounded-md ">
        {/* title  */}
        {totalSelectedImg > 0 ? (
          <div className="px-8 pb-3 pt-2 flex items-center justify-between">
            <div className="flex items-center gap-1 justify-center">
              <input type="checkbox" checked />
              <span>{totalSelectedImg}</span> files selected
            </div>
            <p
              className="px-2 border-b border-b-transparent font-semibold hover:border-b hover:border-b-red-700 text-red-800 transition duration-200 "
              onClick={handleDelete}
            >
              Delete{totalSelectedImg <= 1 ? " file" : " files"}
            </p>
          </div>
        ) : (
          <h5 className="px-4 pt-2 pb-3">Gallery</h5>
        )}
        <hr />

        <ImageList
          images={images}
          onUpdateImage={updateImage}
          dragEnd={dragEnd}
          dragImg={dragImg}
          dragOverImg={dragOverImg}
        />
      </div>
    </section>
  );
}

export default App;
