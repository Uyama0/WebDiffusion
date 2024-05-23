import ImageViewer from "../ImageViewer/ImageViewer";
import ImageUpload from "../imageUpload/ImageUpload";
import SettingsLayout from "../layout/SettingsLayout";

const ScratchToImage: React.FC = () => {
  return (
    <div className="flex gap-md">
      <div className="w-1/2 flex flex-col gap-md">
        <ImageUpload />
        <SettingsLayout />
      </div>
      <div className="w-1/2">
        <ImageViewer />
      </div>
    </div>
  );
};

export default ScratchToImage;
