import { FC, useEffect } from "react";

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
};

const SelectInput: FC<TSelectInput> = ({ label, data }) => {
  return (
    <div className="py-md">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {data.map((dataItem) => (
              <SelectItem value={dataItem}>{dataItem}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectInput;
