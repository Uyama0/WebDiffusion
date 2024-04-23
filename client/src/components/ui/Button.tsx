const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button className="p-2 w-full h-full rounded-base-border-radius bg-red-100">
      {children}
    </button>
  );
};

export default Button;
