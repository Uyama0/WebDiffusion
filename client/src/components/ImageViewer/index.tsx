import { useState, useEffect } from 'react';

import { ImageIcon } from '@radix-ui/react-icons';

import { useAppSelector } from '@/hooks';

import { imagesSelector } from '@/redux/selectors/images';

export const ImageViewer = () => {
    const [image, setImage] = useState('');
    const images = useAppSelector(imagesSelector);

    useEffect(() => {
        setImage(images[images.length - 1]);
    }, [images]);

    return (
        <section className='border rounded-md flex justify-center items-center h-[50vh]'>
            {image ? (
                <img src={image} alt='altimg' className='w-full h-full object-contain rounded-base-border-radius' />
            ) : (
                <ImageIcon className='h-5 w-5 ' />
            )}
        </section>
    );
};
