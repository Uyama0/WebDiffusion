import { Textarea } from "../ui/textarea";

import { setFieldValue } from "../../redux/slices/scratchToImageSlice";
import { BaseModelTypes } from "../../types/modelsTypes";
import { useAppDispatch } from "../../types/reduxHooks";

interface InputFieldProps {
  placeholder?: string;
  required?: boolean;
  fieldName: keyof BaseModelTypes;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, fieldName }) => {
  const dispatch = useAppDispatch();

  const handleChange = (value: string) => {
    dispatch(setFieldValue({ field: fieldName, value: value }));
  };

  return (
    <Textarea
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
      className="h-[50%]"
    />
  );
};

export default InputField;
