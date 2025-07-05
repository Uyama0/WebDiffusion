import { BaseSettings, ControlnetSettings, Separator, PromptEntry, ImageDropZone } from '@/components';
import { useAppDispatch } from '@/hooks';
import { setControlnetArgs } from '@/redux/slices/settings';

import { Result } from './Result';

export const ImageToImage: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleImageChange = (file: File | null) => {
        if (!file) {
            dispatch(setControlnetArgs({ key: 'input_image', value: '' }));
            return;
        }
        const reader = new FileReader();

        reader.onload = (event) => {
            const base64File = event.target?.result as string;
            dispatch(setControlnetArgs({ key: 'input_image', value: base64File }));
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className='flex flex-col'>
            <PromptEntry />
            <div className='flex gap-md'>
                <div className='w-1/2 flex flex-col gap-sm'>
                    <ImageDropZone onChange={handleImageChange} maxSize={10} />
                    <BaseSettings />
                    <Separator />
                    <ControlnetSettings />
                </div>
                <div className='w-1/2 relative'>
                    <Result />
                </div>
            </div>
        </div>
    );
};
