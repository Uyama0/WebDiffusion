import { FC } from 'react';

import { setSettings } from '@/redux/slices/settings';
import { setControlnetArgs } from '@/redux/slices/settings';

import { useAppDispatch } from '@/hooks';
import { TSelectInput } from '@/types/componentTypes';
import { TControlNetArgs, TPromptSchema } from '@/types/modelsTypes';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui';

export const SelectInput: FC<TSelectInput> = ({ label, data, fieldName, controlNet = false }) => {
    const dispatch = useAppDispatch();

    const handleSelectValue = (value: string) => {
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
        <Select onValueChange={handleSelectValue}>
            <SelectTrigger>
                <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {data.map((dataItem, index) => (
                        <SelectItem key={index} value={dataItem}>
                            {dataItem}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
