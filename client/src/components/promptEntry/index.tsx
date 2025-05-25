import { setSettings } from '@/redux/slices/settings';

import { ImageGenerationButton, Textarea } from '@/components';

import { useAppDispatch } from '@/hooks';
import { TPromptSchema } from '@/types/modelsTypes';

export const PromptEntry: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleChange = (value: string, key: keyof TPromptSchema) => {
        dispatch(setSettings({ key: key, value: value }));
    };

    return (
        <section className='flex gap-sm mb-sm'>
            <div className='w-3/4 flex flex-col gap-sm'>
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
            <div className='w-1/4'>
                <ImageGenerationButton />
            </div>
        </section>
    );
};
