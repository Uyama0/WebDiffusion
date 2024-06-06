import { FC } from "react";

import { TPromptSchema } from "./modelsTypes";
import { TControlNetArgs } from "./modelsTypes";

export type TCheckboxInput = {
  label: string;
  data: boolean;
  controlNet?: boolean;
  fieldName: keyof TPromptSchema | keyof TControlNetArgs;
};

export type TSelectInput = {
  label: string;
  data: string[];
  controlNet?: boolean;
  fieldName: keyof TPromptSchema | keyof TControlNetArgs;
};

export type TSliderInput = {
  fieldName:
    | Exclude<keyof TPromptSchema, "alwayson_scripts">
    | keyof TControlNetArgs;
  fieldLabel: string;
  defaultValue?: number;
  step?: number;
  max?: number;
  controlNet?: boolean;
};

export type TLayoutConfigs = {
  component: FC<any>;
  props: TSelectInput | TSliderInput | TCheckboxInput;
  colSpan: number;
  url?: string;
};

export type TColSpan = 1 | 2 | 3 | 4;
