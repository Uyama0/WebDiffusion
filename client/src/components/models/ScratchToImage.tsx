import ImageViewer from "../ImageViewer/ImageViewer";
import ImageUpload from "../imageUpload/ImageUpload";

const ScratchToImage: React.FC = () => {
  return (
    <div className="flex justify-between h-1/3">
      <ImageUpload />
      <ImageViewer />
    </div>
  );
};

export default ScratchToImage;
