import { useRef, useState } from "react";
import { allimages } from "./assets/Images";
import ImageList from "./components/ImageList";
function App() {
  const [images, setImages] = useState(allimages);
  const totalSelectedImg = images.filter((image) => image.checked).length;

  const dragImg = useRef(null);
  const dragOverImg = useRef(null);

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

  const dragEnd = () => {
    console.log(dragImg, dragOverImg);
    const updatedItems = [...images];

    // Remove the dragged item
    const [draggedItem] = updatedItems.splice(dragImg.current, 1);
    // console.log(draggedItem, updatedItems);
    // Insert it at the new position

    updatedItems.splice(dragOverImg.current, 0, draggedItem);

    // Update the source and target indices
    dragImg.current = null;
    dragOverImg.current = null;

    // Update the state with the reordered array
    // console.log(updatedItems);
    setImages(updatedItems);
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
            <button
              className="px-2 py-1 font-semibold border-b text-red-800 "
              onClick={handleDelete}
            >
              {totalSelectedImg <= 1 ? "Delete file" : "Delete files"}
            </button>
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
