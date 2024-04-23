import InputField from "../inputField/InputField";
import Button from "../ui/Button";

const PromptEntry: React.FC = () => {
  return (
    <div className="flex gap-3">
      <section className="w-2/3">
        <InputField placeholder="Your prompt here..." required={true} />
        <InputField
          placeholder="Your negative prompt here..."
          required={true}
        />
      </section>
      <section className="w-1/3">
        <Button>Generate</Button>
      </section>
    </div>
  );
};

export default PromptEntry;
