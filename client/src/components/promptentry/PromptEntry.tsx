import InputField from "../inputField/InputField";
import Button from "../ui/Button";

const PromptEntry: React.FC = () => {
  return (
    <div className="flex gap-3">
      <section className="w-2/3 flex flex-col gap-3">
        <InputField
          placeholder="Your prompt here..."
          required={true}
          fieldName="prompt"
        />
        <InputField
          placeholder="Your negative prompt here..."
          required={true}
          fieldName="negative_prompt"
        />
      </section>
      <section className="w-1/3">
        <Button>Generate</Button>
      </section>
    </div>
  );
};

export default PromptEntry;
