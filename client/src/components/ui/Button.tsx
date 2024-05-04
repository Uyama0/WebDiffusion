import useImageGenerate from "../../hooks/useImageGenerate";

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { getPostImage } = useImageGenerate();

  const handleButtonClick = () => {
    getPostImage();
  };

  return (
    <button
      onClick={handleButtonClick}
      className="p-2 w-full h-full rounded-base-border-radius bg-red-100"
    >
      {children}
    </button>
  );
};

export default Button;
