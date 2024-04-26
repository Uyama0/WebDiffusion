import ImageViewer from "../ImageViewer/ImageViewer";

const ScratchToImage: React.FC = () => {
  return (
    <div className="flex">
      <div className="basis-3/5"></div>
      <div className="flex-1">
        <ImageViewer />
      </div>
    </div>
  );
};

export default ScratchToImage;
