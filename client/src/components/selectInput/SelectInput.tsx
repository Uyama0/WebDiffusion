import { FC } from "react";

import { setFieldValue } from "@/redux/slices/scratchToImageSlice";

import { useAppDispatch } from "@/types/reduxHooks";
import { BaseModelTypes } from "@/types/modelsTypes";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type TSelectInput = {
  label: string;
  data: string[];
  fieldName: keyof BaseModelTypes;
};

const SelectInput: FC<TSelectInput> = ({ label, data, fieldName }) => {
  const dispatch = useAppDispatch();

  const handleSelectValue = (value: string) => {
    dispatch(setFieldValue({ field: fieldName, value: value }));
  };

  return (
    <div className="py-md">
      <Select onValueChange={(value) => handleSelectValue(value)}>
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
