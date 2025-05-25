import { Loader2, Wand } from 'lucide-react';

import { ToggleGroup, ToggleGroupItem, Button } from '@/components';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { TPromptSchema } from '@/types/modelsTypes';

import { settingsSelector, rtkQueryApi } from '@/redux';
import { setImage } from '@/redux/slices/images';
import { setSettings } from '@/redux/slices/settings';

export const ImageGenerationButton: React.FC = () => {
    const dispatch = useAppDispatch();

    const [generateImage, { isLoading }] = rtkQueryApi.useGenerateImageMutation();

    const settings = useAppSelector(settingsSelector);

    const handleButtonClick = () => {
        generateImage(settings).then((response) => dispatch(setImage(response)));
    };

    const handleToggleSwitch = (key: keyof TPromptSchema) => {
        dispatch(
            setSettings({
                key,
                value: !settings.auto,
            })
        );
    };

    return (
        <div className='flex flex-col h-full gap-sm'>
            {isLoading ? (
                <Button disabled className='grow'>
                    <Loader2 className='animate-spin' />
                    Please wait
                </Button>
            ) : (
                <Button onClick={handleButtonClick} className='grow'>
                    Generate
                </Button>
            )}
            <ToggleGroup type='single' variant='outline'>
                <ToggleGroupItem value='auto' aria-label='Toggle switch' onClick={() => handleToggleSwitch('auto')}>
                    <Wand className='h-4 w-4' />
                </ToggleGroupItem>
            </ToggleGroup>
        </div>
    );
};
