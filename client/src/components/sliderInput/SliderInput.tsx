import { FC } from 'react';

import { Slider } from '../ui/slider';
import { Label } from '../ui/label';
import { setSettings } from '@/redux/slices/settings';
import { setControlnetArgs } from '@/redux/slices/settings';

import { useAppDispatch } from '@/types/reduxHooks';
import { useAppSelector } from '@/types/reduxHooks';
import { TSliderInput } from '@/types/componentTypes';

import { TControlNetArgs, TPromptSchema } from '@/types/modelsTypes';

import { settingsSelector, controlnetArgsSelector } from '@/redux/selectors';

const SliderInput: FC<TSliderInput> = ({
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
        <div className='py-md flex flex-col gap-sm'>
            <div className='flex justify-between items-center'>
                <Label>{fieldLabel}:</Label>
                <Label>{String(fieldStateValue)}</Label>
            </div>
            <Slider defaultValue={[defaultValue]} max={max} step={step} onValueChange={handleSliderValueChange} />
        </div>
    );
};

export default SliderInput;
