import ImageViewer from '@/components/ImageViewer/ImageViewer';
import ImageUpload from '@/components/imageUpload/ImageUpload';
import SettingsLayout from '@/components/layout/SettingsLayout';
import ControlnetSettingsLayout from '@/components/layout/ControlnetSettingsLayout';

import { Separator } from '@radix-ui/react-separator';

export const ImageToImage: React.FC = () => {
    return (
        <div className='flex gap-md'>
            <div className='w-1/2 flex flex-col gap-md'>
                <ImageUpload />
                <SettingsLayout />
                <Separator />
                <ControlnetSettingsLayout />
            </div>
            <div className='w-1/2'>{/* <ImageViewer /> */}</div>
        </div>
    );
};
