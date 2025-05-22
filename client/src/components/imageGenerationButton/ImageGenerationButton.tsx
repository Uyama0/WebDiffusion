import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Button } from '../ui/button';
import { MagicWandIcon } from '@radix-ui/react-icons';

import useImageGenerate from '@/hooks/useImageGenerate';
import { setSettings } from '@/redux/slices/settings';

import { useAppDispatch } from '@/types/reduxHooks';
import { useAppSelector } from '@/types/reduxHooks';
import { TPromptSchema } from '@/types/modelsTypes';

import { settingsSelector } from '@/redux/selectors';

const ImageGenerationButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const dispatch = useAppDispatch();
    const { getPostImage } = useImageGenerate();

    const { auto } = useAppSelector(settingsSelector);

    const handleButtonClick = () => {
        getPostImage();
    };

    const handleToggleSwitch = (key: keyof TPromptSchema) => {
        dispatch(
            setSettings({
                key,
                value: !auto,
            })
        );
    };

    return (
        <div className='flex flex-col h-full gap-sm'>
            <Button onClick={handleButtonClick} className='grow'>
                {children}
            </Button>
            <ToggleGroup type='single' variant='outline'>
                <ToggleGroupItem value='auto' aria-label='Toggle switch' onClick={() => handleToggleSwitch('auto')}>
                    <MagicWandIcon className='h-4 w-4' />
                </ToggleGroupItem>
            </ToggleGroup>
        </div>
    );
};

export default ImageGenerationButton;
