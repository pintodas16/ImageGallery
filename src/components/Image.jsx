/* eslint-disable react/prop-types */
function Image({ image, onUpdateImage, featuredImg, ...rest }) {
  // console.log(image);
  return (
    <div
      className={`relative group border-2 rounded-md hover:bg-gray-500  cursor-grab ${
        image.id === featuredImg ? "col-span-2 row-span-2" : ""
      } overflow-hidden bg-cover bg-no-repeat`}
      {...rest}
    >
      <img className=" w-full h-full rounded-md " src={image.src} alt="" />

      <div
        className={`absolute top-0 bottom-0 h-full w-full bg-black transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-40  ${
          image.checked ? "opacity-20" : ""
        }`}
      ></div>
      <div
        className={`absolute top-4 left-4 ${
          image.checked ? "opacity-100" : "opacity-0"
        } group-hover:opacity-100`}
      >
        <form action="">
          <input
            type="checkbox"
            // value={image.checked}
            checked={image.checked}
            onChange={() => onUpdateImage(image.id)}
            className="h-4 w-4 text-blue-600 "
          />
        </form>
      </div>
    </div>
  );
}

export default Image;
