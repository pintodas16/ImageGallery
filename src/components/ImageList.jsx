/* eslint-disable react/prop-types */

import Image from "./Image";
function ImageList({ images, onUpdateImage }) {
  const totalImages = images.length;
  const coverImg = images[0].id;
  return (
    // image container
    <div className=" p-4 grid gap-4 grid-rows-3 grid-cols-5  ">
      {images.map((image) => (
        <Image
          totalImages={totalImages}
          coverImg={coverImg}
          image={image}
          key={image.id}
          onUpdateImage={onUpdateImage}
        />
      ))}
      {/* <!-- add image   --> */}
      <div className="border-dotted border-2 rounded-md">
        <div className="h-full flex flex-col gap-4 items-center justify-center">
          <i
            className="fa-regular fa-image text-lg"
            style={{ color: "#2f343c" }}
          ></i>
          <p className="font-serif">Add Images</p>
        </div>
      </div>
    </div>
  );
}
export default ImageList;
