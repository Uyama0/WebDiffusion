import { Loader2, Wand } from 'lucide-react';

import { ToggleGroup, ToggleGroupItem, Button } from '@/components';

import { useAppDispatch, useAppSelector, useToast } from '@/hooks';

import { settingsSelector, rtkQueryApi, parametersSelector } from '@/redux';
import { setImage } from '@/redux/slices/images';
import { setAuto } from '@/redux/slices/parameters';

export const ImageGenerationButton: React.FC = () => {
    const dispatch = useAppDispatch();
    const { toast } = useToast();

    const [generateImage, { isLoading }] = rtkQueryApi.useGenerateImageMutation();

    const settings = useAppSelector(settingsSelector);
    const { auto } = useAppSelector(parametersSelector);

    const handleButtonClick = () => {
        generateImage(settings)
            .unwrap()
            .then((response) => {
                dispatch(setImage(response));
                toast({
                    description: 'Your image has been generated.',
                });
            })
            .catch(() => {
                toast({
                    variant: 'destructive',
                    title: 'Uh oh! Something went wrong.',
                    description: 'There was a problem with your request.',
                });
            });
    };

    const handleToggleSwitch = () => {
        dispatch(setAuto(!auto));
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
                <ToggleGroupItem value='auto' aria-label='Toggle switch' onClick={() => handleToggleSwitch()}>
                    <Wand className='h-4 w-4' />
                </ToggleGroupItem>
            </ToggleGroup>
        </div>
    );
};
