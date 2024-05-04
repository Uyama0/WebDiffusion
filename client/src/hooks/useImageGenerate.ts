import { useState } from "react";

import { setKeepImage } from "../redux/slices/imageKeeperSlice";

import { useAppSelector } from "../types/reduxHooks";
import { useAppDispatch } from "../types/reduxHooks";

interface ErrorResponse {
  message: string;
  code: number;
}

const useImageGenerate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorResponse | null>(null);

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
    } catch (error: any) {
      setError(error);
    }
    setIsLoading(false);
  };

  return { getPostImage, isLoading, error };
};

export default useImageGenerate;
