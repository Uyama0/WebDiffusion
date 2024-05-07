import useImageGenerate from "../../hooks/useImageGenerate";

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { getPostImage } = useImageGenerate();

  const handleButtonClick = () => {
    getPostImage();
  };

  return (
    <button
      onClick={handleButtonClick}
      className="p-2 w-full h-full rounded-base-border-radius border border-black"
    >
      {children}
    </button>
  );
};

export default Button;
