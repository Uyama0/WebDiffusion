import { useState } from 'react';

import { setImage } from '../redux/slices/images';

import { useAppSelector, useAppDispatch } from '@/hooks';

import determineEndpoint from '@/utils/endpointSwitch';

import { settingsSelector } from '@/redux/selectors';

const useImageGenerate = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const dispatch = useAppDispatch();
    const settings = useAppSelector(settingsSelector);

    const url = 'https://t7cgczbg-3000.euw.devtunnels.ms';

    const getPostImage = async () => {
        setIsLoading(true);

        const endpoint = determineEndpoint(settings, url);

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(settings),
            });

            if (response.ok) {
                const imageBlob = await response.blob();
                const imageObjectURL = URL.createObjectURL(imageBlob);
                dispatch(setImage(imageObjectURL));
            }
        } catch (error) {
            setError(error as Error);
        }
        setIsLoading(false);
    };

    return { getPostImage, isLoading, error };
};

export default useImageGenerate;
