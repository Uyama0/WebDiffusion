import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "./button";
import { MagicWandIcon } from "@radix-ui/react-icons";

import useImageGenerate from "@/hooks/useImageGenerate";
import { setFieldValue } from "@/redux/slices/scratchToImageSlice";

import { useAppDispatch } from "@/types/reduxHooks";
import { useAppSelector } from "@/types/reduxHooks";
import { BaseModelTypes } from "@/types/modelsTypes";

const ButtonSelf: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { getPostImage } = useImageGenerate();

  const auto = useAppSelector((data) => data.settings.auto);

  const handleButtonClick = () => {
    getPostImage();
  };

  const handleToogleSwitch = (fieldName: keyof BaseModelTypes) => {
    dispatch(
      setFieldValue({
        field: fieldName,
        value: !auto,
      })
    );
  };

  return (
    <div className="flex flex-col h-full gap-sm">
      <Button onClick={handleButtonClick} className="grow">
        {children}
      </Button>
      <ToggleGroup type="single" variant="outline">
        <ToggleGroupItem
          value="auto"
          aria-label="Toggle switch"
          onClick={() => handleToogleSwitch("auto")}
        >
          <MagicWandIcon className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ButtonSelf;
