import { ImageViewer, ImageUpload, BaseSettings } from '@/components';
import ControlnetSettingsLayout from '@/components/layout/ControlnetSettingsLayout';

export const ImageToImage: React.FC = () => {
    return (
        <div className='flex gap-md mx-sm'>
            <div className='w-1/2 flex flex-col gap-sm'>
                <ImageUpload />
                <BaseSettings />

                <ControlnetSettingsLayout />
            </div>
            <div className='w-1/2'>
                <ImageViewer />
            </div>
        </div>
    );
};
