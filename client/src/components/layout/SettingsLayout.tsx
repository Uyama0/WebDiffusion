import { FC } from "react";

import SliderInput from "../sliderInput/SliderInput";
import SelectInput from "../selectInput/SelectInput";

import samplingMethods from "../../../public/data/samplingMethods.json";

const SettingsLayout: FC = () => {
  return (
    <div className="grid grid-cols-4 gap-sm">
      <div className="col-span-2">
        <SelectInput
          label={samplingMethods.label}
          data={samplingMethods.data}
          fieldName="sampler_index"
        />
      </div>
      <div className="col-span-2">
        <SliderInput
          fieldName="steps"
          field_label="Sampling steps"
          defaultValue={20}
          max={150}
        />
      </div>
      <div className="col-span-3">
        <SliderInput
          fieldName="width"
          field_label="Width"
          defaultValue={512}
          max={2048}
        />
      </div>
      <div className="col-span-1">
        <SliderInput
          fieldName="batch_count"
          field_label="Batch count"
          defaultValue={1}
        />
      </div>
      <div className="col-span-3">
        <SliderInput
          fieldName="height"
          field_label="Height"
          defaultValue={512}
          max={2048}
        />
      </div>
      <div className="col-span-1">
        <SliderInput
          fieldName="batch_size"
          field_label="Batch size"
          defaultValue={1}
          max={100}
        />
      </div>
    </div>
  );
};

export default SettingsLayout;
