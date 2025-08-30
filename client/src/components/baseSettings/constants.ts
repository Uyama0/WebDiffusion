import { SliderInput, SelectInput } from '@/components';

import { TColSpan, TLayoutConfigs } from '@/types/componentTypes';

export const SAMPLING_METHODS = {
    label: 'Метод генерации',
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
            fieldLabel: 'Шагов генерации',
            defaultValue: 20,
            max: 150,
        },
        colSpan: 2,
    },
    {
        component: SliderInput,
        props: {
            fieldName: 'width',
            fieldLabel: 'Ширина',
            defaultValue: 512,
            max: 2048,
        },
        colSpan: 3,
    },
    {
        component: SliderInput,
        props: {
            fieldName: 'batch_count',
            fieldLabel: 'Кол-во вхождений',
            defaultValue: 1,
        },
        colSpan: 1,
    },
    {
        component: SliderInput,
        props: {
            fieldName: 'height',
            fieldLabel: 'Высота',
            defaultValue: 512,
            max: 2048,
        },
        colSpan: 3,
    },
    {
        component: SliderInput,
        props: {
            fieldName: 'batch_size',
            fieldLabel: 'Кол-во изображений',
            defaultValue: 1,
            max: 100,
        },
        colSpan: 1,
    },
    {
        component: SliderInput,
        props: {
            fieldName: 'cfg_scale',
            fieldLabel: 'Коэффициент соответствия промпту',
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
