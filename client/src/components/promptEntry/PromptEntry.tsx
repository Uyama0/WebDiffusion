import InputField from "../inputField/InputField";
import ButtonSelf from "../ui/ButtonSelf";

const PromptEntry: React.FC = () => {
  return (
    <div className="flex gap-md ">
      <section className="w-2/3 flex flex-col gap-md">
        <InputField
          placeholder="Your prompt here..."
          fieldName="prompt"
          autoFocus={true}
        />
        <InputField
          placeholder="Your negative prompt here..."
          fieldName="negative_prompt"
        />
      </section>
      <section className="w-1/3">
        <ButtonSelf>Generate</ButtonSelf>
      </section>
    </div>
  );
};

export default PromptEntry;
