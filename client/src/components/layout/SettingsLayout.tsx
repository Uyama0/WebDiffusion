import { FC } from "react";

import SliderInput from "../sliderInput/SliderInput";
import SelectInput from "../selectInput/SelectInput";

import { TSelectInput } from "@/types/componentTypes";
import { TSliderInput } from "@/types/componentTypes";

import samplingMethods from "@/assets/data/samplingMethods.json";

type TLayoutConfigs = {
  component: FC<any>;
  props: TSelectInput | TSliderInput;
  colSpan: number;
};

const layoutConfigs: TLayoutConfigs[] = [
  {
    component: SelectInput,
    props: {
      label: samplingMethods.label,
      data: samplingMethods.data,
      fieldName: "sampler_index",
    },
    colSpan: 2,
  },
  {
    component: SliderInput,
    props: {
      fieldName: "steps",
      fieldLabel: "Sampling steps",
      defaultValue: 20,
      max: 150,
    },
    colSpan: 2,
  },
  {
    component: SliderInput,
    props: {
      fieldName: "width",
      fieldLabel: "Width",
      defaultValue: 512,
      max: 2048,
    },
    colSpan: 3,
  },
  {
    component: SliderInput,
    props: {
      fieldName: "batch_count",
      fieldLabel: "Batch count",
      defaultValue: 1,
    },
    colSpan: 1,
  },
  {
    component: SliderInput,
    props: {
      fieldName: "height",
      fieldLabel: "Height",
      defaultValue: 512,
      max: 2048,
    },
    colSpan: 3,
  },
  {
    component: SliderInput,
    props: {
      fieldName: "batch_size",
      fieldLabel: "Batch size",
      defaultValue: 1,
      max: 100,
    },
    colSpan: 1,
  },
];

const SettingsLayout: FC = () => {
  return (
    <div className="grid grid-cols-4 gap-sm">
      {layoutConfigs.map(({ component: Component, props, colSpan }, index) => (
        <div key={index} className={`col-span-${colSpan}`}>
          <Component {...props} />
        </div>
      ))}
    </div>
  );
};

export default SettingsLayout;
