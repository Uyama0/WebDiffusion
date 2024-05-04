import { useState, useEffect } from "react";
import { useAppSelector } from "../../types/reduxHooks";

const ImageViewer = () => {
  const [image, setImage] = useState("");
  const images = useAppSelector((state) => state.images.images);

  useEffect(() => {
    setImage(images[images.length - 1]);
  }, [images]);

  return (
    <section className="border rounded-base-border-radius border-black p-base-padding flex justify-center items-center w-[33vw] h-[45vh]">
      {image ? (
        <img src={image} alt="altimg" className="w-full h-full object-cover" />
      ) : (
        <p>no image...</p>
      )}
    </section>
  );
};

export default ImageViewer;
