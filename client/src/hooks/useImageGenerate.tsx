import { useState } from "react";

import { setKeepImage } from "../redux/slices/imageKeeperSlice";

import { useAppSelector } from "../types/reduxHooks";
import { useAppDispatch } from "../types/reduxHooks";

const useImageGenerate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const dispatch = useAppDispatch();
  const settings = useAppSelector((data) => data.settings);

  const url = "http://127.0.0.1:8000/scratchToImg";

  const getPostImage = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      });

      const imageBlob = await response.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      dispatch(setKeepImage(imageObjectURL));
    } catch (error) {
      setError(error as Error);
    }
    setIsLoading(false);
  };

  return { getPostImage, isLoading, error };
};

export default useImageGenerate;
