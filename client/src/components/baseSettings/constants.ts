import { SliderInput, SelectInput } from '@/components';

import { TColSpan, TLayoutConfigs } from '@/types/componentTypes';

export const SAMPLING_METHODS = {
    label: 'Sampling method',
    data: [
        'Euler a',
        'DPM++ 2M Karras',
        'DPM++ SDE Karras',
        'DPM++ 2M SDE Exponential',
        'DPM++ 2M SDE Karras',
        'Euler',
        'LMS',
        'Heun',
        'DPM2',
        'DPM2 a',
    ],
};

export const BASE_SETTINGS_CONFIG: TLayoutConfigs[] = [
    {
        component: SelectInput,
        props: {
            label: SAMPLING_METHODS.label,
            data: SAMPLING_METHODS.data,
            fieldName: 'sampler_name',
        },
        colSpan: 2,
    },
    {
        component: SliderInput,
        props: {
            fieldName: 'steps',
            fieldLabel: 'Sampling steps',
            defaultValue: 20,
            max: 150,
        },
        colSpan: 2,
    },
    {
        component: SliderInput,
        props: {
            fieldName: 'width',
            fieldLabel: 'Width',
            defaultValue: 512,
            max: 2048,
        },
        colSpan: 3,
    },
    {
        component: SliderInput,
        props: {
            fieldName: 'batch_count',
            fieldLabel: 'Batch count',
            defaultValue: 1,
        },
        colSpan: 1,
    },
    {
        component: SliderInput,
        props: {
            fieldName: 'height',
            fieldLabel: 'Height',
            defaultValue: 512,
            max: 2048,
        },
        colSpan: 3,
    },
    {
        component: SliderInput,
        props: {
            fieldName: 'batch_size',
            fieldLabel: 'Batch size',
            defaultValue: 1,
            max: 100,
        },
        colSpan: 1,
    },
    {
        component: SliderInput,
        props: {
            fieldName: 'cfg_scale',
            fieldLabel: 'CFG scale',
            defaultValue: 7,
            max: 30,
            step: 0.5,
        },
        colSpan: 4,
    },
];

export const COL_SPAN_VARIANTS: { [key in TColSpan]: string } = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
};
