import { ImageViewer, ImageUpload, BaseSettings, ControlnetSettings, Separator } from '@/components';

export const ImageToImage: React.FC = () => {
    return (
        <div className='flex gap-md'>
            <div className='w-1/2 flex flex-col gap-sm'>
                <ImageUpload />
                <BaseSettings />
                <Separator />
                <ControlnetSettings />
            </div>
            <div className='w-1/2'>
                <ImageViewer />
            </div>
        </div>
    );
};
