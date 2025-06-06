import { FC } from 'react';

import { Slider } from '../ui';
import { Label } from '../ui';
import { setSettings } from '@/redux/slices/settings';
import { setControlnetArgs } from '@/redux/slices/settings';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { TSliderInput } from '@/types/componentTypes';

import { TControlNetArgs, TPromptSchema } from '@/types/modelsTypes';

import { settingsSelector, controlnetArgsSelector } from '@/redux/selectors';

export const SliderInput: FC<TSliderInput> = ({
    fieldName,
    fieldLabel,
    defaultValue = 1,
    step = 1,
    max = 100,
    controlNet = false,
}) => {
    const dispatch = useAppDispatch();

    const settings = useAppSelector(settingsSelector);
    const controlnetArgs = useAppSelector(controlnetArgsSelector);

    const fieldStateValue = controlNet
        ? controlnetArgs[fieldName as keyof TControlNetArgs]
        : settings[fieldName as keyof TPromptSchema];

    const handleSliderValueChange = (value: number[]) => {
        const action = controlNet
            ? setControlnetArgs({
                  key: fieldName as keyof TControlNetArgs,
                  value: value[0],
              })
            : setSettings({
                  key: fieldName as keyof TPromptSchema,
                  value: value[0],
              });

        dispatch(action);
    };

    return (
        <div className='flex flex-col gap-sm'>
            <div className='flex justify-between items-center'>
                <Label>{fieldLabel}:</Label>
                <Label>{String(fieldStateValue)}</Label>
            </div>
            <Slider defaultValue={[defaultValue]} max={max} step={step} onValueChange={handleSliderValueChange} />
        </div>
    );
};
