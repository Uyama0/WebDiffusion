import { setSettings } from '@/redux/slices/settings';

import { ImageGenerationButton } from '@/components';
import { Textarea } from '@/components/ui';

import { useAppDispatch } from '@/hooks';
import { TPromptSchema } from '@/types/modelsTypes';

export const PromptEntry: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleChange = (value: string, key: keyof TPromptSchema) => {
        dispatch(setSettings({ key: key, value: value }));
    };

    return (
        <section className='flex gap-sm'>
            <div className='w-2/3 flex flex-col gap-sm'>
                <Textarea
                    placeholder='Your prompt here...'
                    onChange={(e) => handleChange(e.target.value, 'prompt')}
                    className='resize-none'
                />
                <Textarea
                    placeholder='Your negative prompt here...'
                    onChange={(e) => handleChange(e.target.value, 'negative_prompt')}
                    className='resize-none'
                />
            </div>
            <div className='w-1/3'>
                <ImageGenerationButton>Generate</ImageGenerationButton>
            </div>
        </section>
    );
};
