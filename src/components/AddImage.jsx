function AddImage() {
  return (
    <div className="border-dotted border-2 rounded-md">
      <div className="h-full py-10 md:py-0 flex flex-col gap-4 items-center justify-center">
        <i
          className="fa-regular fa-image text-lg"
          style={{ color: "#2f343c" }}
        ></i>
        <p className="font-serif">Add Images</p>
      </div>
    </div>
  );
}
export default AddImage;
