import { FC } from "react";

import CheckboxInput from "../checkboxInput/CheckboxInput";
import SliderInput from "../sliderInput/SliderInput";
import SelectInput from "../selectInput/SelectInput";

import { TColSpan } from "@/types/componentTypes";
import { TLayoutConfigs } from "@/types/componentTypes";

import preprocessorsControlnet from "@/assets/data/preprocessorsControlnet.json";
import modelControlnet from "@/assets/data/modelControlnet.json";

const checkboxLayoutConfigs: TLayoutConfigs[] = [
  {
    component: CheckboxInput,
    props: {
      label: "Enabled",
      data: true,
      fieldName: "enabled",
      controlNet: true,
    },
    colSpan: 1,
  },
  {
    component: CheckboxInput,
    props: {
      label: "Pixel perfect",
      data: false,
      fieldName: "pixel_perfect",
      controlNet: true,
    },
    colSpan: 1,
  },
  {
    component: CheckboxInput,
    props: {
      label: "Low VRAM",
      data: false,
      fieldName: "lowvram",
      controlNet: true,
    },
    colSpan: 1,
  },
  {
    component: CheckboxInput,
    props: {
      label: "Enabled",
      data: false,
      fieldName: "enabled",
      controlNet: true,
    },
    colSpan: 1,
  },
];

const layoutConfigs: TLayoutConfigs[] = [
  {
    component: SelectInput,
    props: {
      label: preprocessorsControlnet.label,
      data: preprocessorsControlnet.data,
      fieldName: "module",
    },
    colSpan: 3,
  },
  {
    component: SelectInput,
    props: {
      label: modelControlnet.label,
      data: modelControlnet.data,
      fieldName: "model",
    },
    colSpan: 3,
  },
  {
    component: SliderInput,
    props: {
      fieldName: "weight",
      fieldLabel: "Control weight",
      defaultValue: 1,
      max: 3,
      step: 1,
      controlNet: true,
    },
    colSpan: 2,
  },
  {
    component: SliderInput,
    props: {
      fieldName: "guidance_start",
      fieldLabel: "Starting Control Step",
      defaultValue: 0,
      max: 1,
      step: 0.01,
      controlNet: true,
    },
    colSpan: 2,
  },
  {
    component: SliderInput,
    props: {
      fieldName: "guidance_end",
      fieldLabel: "Ending Control Step",
      defaultValue: 1,
      max: 1,
      step: 0.01,
      controlNet: true,
    },
    colSpan: 2,
  },
];

const colSpanVariants: { [key in TColSpan]: string } = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
};

const ControlnetSettingsLayout: FC = () => {
  return (
    <div>
      <h1>ControlNet:</h1>
      <div className="grid grid-cols-4 gap-sm">
        {checkboxLayoutConfigs.map(
          ({ component: Component, props, colSpan }, index) => {
            return (
              <div
                key={index}
                className={`${colSpanVariants[colSpan as TColSpan]}`}
              >
                <Component {...props} />
              </div>
            );
          }
        )}
      </div>
      <div className="grid grid-cols-6 gap-sm">
        {layoutConfigs.map(
          ({ component: Component, props, colSpan }, index) => {
            return (
              <div
                key={index}
                className={`${colSpanVariants[colSpan as TColSpan]}`}
              >
                <Component {...props} />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ControlnetSettingsLayout;
