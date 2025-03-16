import { FC, useState } from 'react';

import { setNestedFieldValue } from '@/redux/slices/scratchToImageSlice';
import { setFieldValue } from '@/redux/slices/scratchToImageSlice';

import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';

import { useAppDispatch } from '@/types/reduxHooks';
import { TCheckboxInput } from '@/types/componentTypes';
import { TControlNetArgs } from '@/types/modelsTypes';
import { TPromptSchema } from '@/types/modelsTypes';

const CheckboxInput: FC<TCheckboxInput> = ({ label, data, fieldName, controlNet = false }) => {
    const dispatch = useAppDispatch();

    const [isEnabled, setIsEnabled] = useState(data);

    const hangleChckboxClick = () => {
        setIsEnabled(!isEnabled);

        const action = controlNet
            ? setNestedFieldValue({
                  field: fieldName as keyof TControlNetArgs,
                  value: isEnabled,
              })
            : setFieldValue({
                  field: fieldName as keyof TPromptSchema,
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

export default CheckboxInput;
