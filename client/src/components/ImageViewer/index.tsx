import { useState, useEffect } from 'react';

import { ImageIcon } from '@radix-ui/react-icons';
import { useAppSelector } from '@/hooks';
import { imagesSelector } from '@/redux/selectors/images';

export const ImageViewer = () => {
    const [currImage, setCurrImage] = useState('');
    const { images } = useAppSelector(imagesSelector);

    useEffect(() => {
        setCurrImage(images[images.length - 1]);
    }, [images]);

    return (
        <section className='border-4 border-border rounded-md flex justify-center items-center h-[50vh]'>
            {currImage ? (
                <img
                    src={currImage}
                    alt='input image'
                    className='w-full h-full object-contain rounded-base-border-radius'
                />
            ) : (
                <ImageIcon className='h-10 w-10 ' />
            )}
        </section>
    );
};
