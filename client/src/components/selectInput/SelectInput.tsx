import { FC } from "react";

import { setFieldValue } from "@/redux/slices/scratchToImageSlice";
import { setNestedFieldValue } from "@/redux/slices/scratchToImageSlice";

import { useAppDispatch } from "@/types/reduxHooks";
import { TSelectInput } from "@/types/componentTypes";
import { TControlNetArgs, TPromptSchema } from "@/types/modelsTypes";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectInput: FC<TSelectInput> = ({
  label,
  data,
  fieldName,
  controlNet = false,
}) => {
  const dispatch = useAppDispatch();

  const handleSelectValue = (value: string) => {
    const action = controlNet
      ? setNestedFieldValue({
          field: fieldName as keyof TControlNetArgs,
          value: value[0],
        })
      : setFieldValue({
          field: fieldName as keyof TPromptSchema,
          value: value[0],
        });

    dispatch(action);
  };

  return (
    <div className="py-md">
      <Select onValueChange={handleSelectValue}>
        <SelectTrigger>
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {data.map((dataItem, index) => (
              <SelectItem key={index} value={dataItem}>
                {dataItem}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectInput;
