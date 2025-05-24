import { TLayoutConfigs } from '@/types/componentTypes';

import { CheckboxInput, SelectInput, SliderInput } from '@/components';

const PREPROCESSOR_METHODS = {
    label: 'Preprocessor',
    data: ['none'],
};

const CONTROLNET_MODELS = {
    label: 'Preprocessor',
    data: ['none'],
};

export const CONTROLNET_TOGGLE_SETTINGS: TLayoutConfigs[] = [
    {
        component: CheckboxInput,
        props: {
            label: 'Pixel perfect',
            data: false,
            fieldName: 'pixel_perfect',
            controlNet: true,
        },
        colSpan: 1,
    },
    {
        component: CheckboxInput,
        props: {
            label: 'Low VRAM',
            data: false,
            fieldName: 'lowvram',
            controlNet: true,
        },
        colSpan: 1,
    },
];

export const CONTROLNET_PARAMETER_SETTINGS: TLayoutConfigs[] = [
    {
        component: SelectInput,
        props: {
            label: PREPROCESSOR_METHODS.label,
            data: PREPROCESSOR_METHODS.data,
            fieldName: 'module',
        },
        colSpan: 3,
    },
    {
        component: SelectInput,
        props: {
            label: CONTROLNET_MODELS.label,
            data: CONTROLNET_MODELS.data,
            fieldName: 'model',
        },
        colSpan: 3,
    },
    {
        component: SliderInput,
        props: {
            fieldName: 'weight',
            fieldLabel: 'Control weight',
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
            fieldName: 'guidance_start',
            fieldLabel: 'Starting Control Step',
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
            fieldName: 'guidance_end',
            fieldLabel: 'Ending Control Step',
            defaultValue: 1,
            max: 1,
            step: 0.01,
            controlNet: true,
        },
        colSpan: 2,
    },
];
