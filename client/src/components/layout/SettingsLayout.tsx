import { FC } from "react";

import SliderInput from "../sliderInput/SliderInput";
import SelectInput from "../selectInput/SelectInput";

import { TColSpan } from "@/types/componentTypes";
import { TLayoutConfigs } from "@/types/componentTypes";

import samplingMethods from "@/assets/data/samplingMethods.json";
import prep from "@/assets/data/preprocessorsControlnet.json";

const layoutConfigs: TLayoutConfigs[] = [
  {
    component: SelectInput,
    props: {
      label: samplingMethods.label,
      data: samplingMethods.data,
      fieldName: "sampler_name",
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
  {
    component: SliderInput,
    props: {
      fieldName: "cfg_scale",
      fieldLabel: "CFG scale",
      defaultValue: 7,
      max: 30,
      step: 0.5,
    },
    colSpan: 4,
  },
];

const colSpanVariants: { [key in TColSpan]: string } = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
};

const SettingsLayout: FC = () => {
  return (
    <div className="grid grid-cols-4 gap-sm">
      {layoutConfigs.map(({ component: Component, props, colSpan }, index) => {
        return (
          <div
            key={index}
            className={`${colSpanVariants[colSpan as TColSpan]}`}
          >
            <Component {...props} />
          </div>
        );
      })}
    </div>
  );
};

export default SettingsLayout;
