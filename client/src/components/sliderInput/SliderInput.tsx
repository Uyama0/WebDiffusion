import { FC, useState } from "react";

import { Slider } from "../ui/slider";
import { Label } from "../ui/label";
import { setFieldValue } from "@/redux/slices/scratchToImageSlice";

import { useAppDispatch } from "@/types/reduxHooks";
import { useAppSelector } from "@/types/reduxHooks";
import { TSliderInput } from "@/types/componentTypes";

const SliderInput: FC<TSliderInput> = ({
  fieldName,
  fieldLabel,
  defaultValue = 1,
  step = 1,
  max = 100,
}) => {
  const dispatch = useAppDispatch();

  const fieldStateValue = useAppSelector((data) => data.settings[fieldName]);

  const handleSliderValueChange = (value: number[]) => {
    dispatch(setFieldValue({ field: fieldName, value: value[0] }));
  };

  return (
    <div className="py-md flex flex-col gap-sm">
      <div className="flex justify-between items-center">
        <Label>{fieldLabel}:</Label>
        <Label>{fieldStateValue}</Label>
      </div>
      <Slider
        defaultValue={[defaultValue]}
        max={max}
        step={step}
        onValueChange={handleSliderValueChange}
      />
    </div>
  );
};

export default SliderInput;
