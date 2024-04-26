interface InputFieldProps {
  placeholder?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  required = false,
}) => {
  return (
    <>
      <textarea
        rows={2}
        required={required}
        placeholder={placeholder}
        className="border border-black w-full rounded-base-border-radius p-base-padding resize-none"
      />
    </>
  );
};

export default InputField;
