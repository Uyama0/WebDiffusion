import { BaseModelTypes } from "./modelsTypes";

export type TSelectInput = {
  label: string;
  data: string[];
  fieldName: keyof BaseModelTypes;
};

export type TSliderInput = {
  fieldName: keyof BaseModelTypes;
  fieldLabel: string;
  defaultValue?: number;
  step?: number;
  max?: number;
};
