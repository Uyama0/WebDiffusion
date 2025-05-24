import { useState } from 'react';

import { setControlnetArgs } from '@/redux/slices/settings';
import { setSettings } from '@/redux/slices/settings';

import { Checkbox, Label } from '@/components';

import { useAppDispatch } from '@/hooks';
import { TCheckboxInput } from '@/types/componentTypes';
import { TControlNetArgs } from '@/types/modelsTypes';
import { TPromptSchema } from '@/types/modelsTypes';

export const CheckboxInput: React.FC<TCheckboxInput> = ({ label, data, fieldName, controlNet = false }) => {
    const dispatch = useAppDispatch();

    const [isEnabled, setIsEnabled] = useState(data);

    const hangleChckboxClick = () => {
        setIsEnabled(!isEnabled);

        const action = controlNet
            ? setControlnetArgs({
                  key: fieldName as keyof TControlNetArgs,
                  value: isEnabled,
              })
            : setSettings({
                  key: fieldName as keyof TPromptSchema,
                  value: isEnabled,
              });

        dispatch(action);
    };

    return (
        <div className='flex items-center space-x-2 py-sm'>
            <Checkbox checked={isEnabled} onClick={hangleChckboxClick} />
            <Label>{label}</Label>
        </div>
    );
};
