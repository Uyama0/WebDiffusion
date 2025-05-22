import { useRef, useEffect } from 'react';

import { Textarea } from '../ui/textarea';

import { setSettings } from '../../redux/slices/settings';
import { TPromptSchema } from '../../types/modelsTypes';
import { useAppDispatch } from '../../types/reduxHooks';

interface InputFieldProps {
    placeholder?: string;
    fieldName: keyof TPromptSchema;
    autoFocus?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, fieldName, autoFocus = false }) => {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (value: string) => {
        dispatch(setSettings({ key: fieldName, value: value }));
    };

    useEffect(() => {
        if (autoFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <Textarea
            ref={inputRef}
            onChange={(e) => handleChange(e.target.value)}
            placeholder={placeholder}
            className='h-[50%]'
        />
    );
};

export default InputField;
