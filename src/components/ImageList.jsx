import AddImage from "./AddImage";
import Image from "./Image";
function ImageList({ images, onUpdateImage, dragEnd, dragImg, dragOverImg }) {
  // set the featured Image
  const featuredImg = images[0].id;

  return (
    // image container
    <div className="md:h-[30rem]  p-4 grid gap-4 grid-cols-2 md:grid-cols-5 md:grid-rows-3 ">
      {images.map((image, index) => (
        <Image
          featuredImg={featuredImg}
          image={image}
          key={image.id}
          onUpdateImage={onUpdateImage}
          draggable="true"
          onDragStart={() => (dragImg.current = index)}
          onDragEnter={() => (dragOverImg.current = index)}
          onDragEnd={dragEnd}
          onDragOver={(e) => e.preventDefault()}
        />
      ))}
      {/* <!-- add image   --> */}
      <AddImage />
    </div>
  );
}
export default ImageList;
