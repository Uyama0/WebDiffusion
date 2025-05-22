import { Input } from '@/components/ui/input';
import { Label } from '../ui/label';

import { setControlnetArgs } from '@/redux/slices/settings';
import { useAppDispatch } from '@/types/reduxHooks';
import { useAppSelector } from '@/types/reduxHooks';

import { controlnetArgsSelector } from '@/redux/selectors';

const ImageUpload: React.FC = () => {
    const dispatch = useAppDispatch();
    const { input_image } = useAppSelector(controlnetArgsSelector);

    const handleImageChange = (event: any) => {
        if (event.target.files && event.target.files.length > 0) {
            const selectedImage = event.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64String = reader.result as string;
                dispatch(setControlnetArgs({ key: 'input_image', value: base64String }));
            };

            reader.readAsDataURL(selectedImage);
        }
    };

    return (
        <section className='border relative rounded-md flex justify-center items-center h-[50vh]'>
            <Input
                id='picture'
                type='file'
                onChange={handleImageChange}
                className='absolute inset-0 h-full opacity-0 cursor-pointer'
            />
            <Label className='-z-20'>Chose your image</Label>
            {input_image && (
                <img src={input_image} alt='Uploaded' className='absolute inset-0 object-contain h-full w-full -z-10' />
            )}
        </section>
    );
};

export default ImageUpload;
