import { FC } from "react";

import { Slider } from "../ui/slider";
import { Label } from "../ui/label";
import { setFieldValue } from "@/redux/slices/scratchToImageSlice";
import { setNestedFieldValue } from "@/redux/slices/scratchToImageSlice";

import { useAppDispatch } from "@/types/reduxHooks";
import { useAppSelector } from "@/types/reduxHooks";
import { TSliderInput } from "@/types/componentTypes";

import { TControlNetArgs, TPromptSchema } from "@/types/modelsTypes";

const SliderInput: FC<TSliderInput> = ({
  fieldName,
  fieldLabel,
  defaultValue = 1,
  step = 1,
  max = 100,
  controlNet = false,
}) => {
  const dispatch = useAppDispatch();

  const fieldStateValue = useAppSelector((data) => {
    return controlNet
      ? data.settings.alwayson_scripts.controlnet.args[0][
          fieldName as keyof TControlNetArgs
        ]
      : data.settings[fieldName as keyof TPromptSchema];
  });

  const handleSliderValueChange = (value: number[]) => {
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
    <div className="py-md flex flex-col gap-sm">
      <div className="flex justify-between items-center">
        <Label>{fieldLabel}:</Label>
        <Label>{String(fieldStateValue)}</Label>
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
