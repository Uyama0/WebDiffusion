import { setFieldValue } from "../../redux/slices/scratchToImageSlice";
import { useAppDispatch } from "../../types/reduxHooks";

const ImageUpload: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleImageChange = (event: any) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedImage = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        dispatch(setFieldValue({ field: "image", value: base64String }));
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <section className="border rounded-md border-black flex justify-center items-center h-[50vh]">
      <input type="file" onChange={handleImageChange} accept="image/*" />
    </section>
  );
};

export default ImageUpload;
