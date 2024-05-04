import { setFieldValue } from "../../redux/slices/scratchToImageSlice";
import { BaseModelTypes } from "../../types/modelsTypes";
import { useAppDispatch } from "../../types/reduxHooks";

interface InputFieldProps {
  placeholder?: string;
  required?: boolean;
  fieldName: keyof BaseModelTypes;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  required = false,
  fieldName,
}) => {
  const dispatch = useAppDispatch();

  const handleChange = (value: string) => {
    dispatch(setFieldValue({ field: fieldName, value: value }));
  };

  return (
    <>
      <textarea
        onChange={(e) => handleChange(e.target.value)}
        rows={2}
        required={required}
        placeholder={placeholder}
        className="border border-black w-full rounded-base-border-radius p-base-padding resize-none"
      />
    </>
  );
};

export default InputField;
