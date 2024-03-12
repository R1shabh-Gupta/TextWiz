import OCRTextExtractor from "./OCRTextExtractor";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type InputTextareaProps = {
  setInputText: (text: string) => void;
  inputText: string;
};

const InputTextarea = ({ setInputText, inputText }: InputTextareaProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <Label htmlFor="message" className="text-lg">
          Input Text
        </Label>
        <OCRTextExtractor setInputText={setInputText} />
      </div>
      <Textarea
        className="resize-y placeholder:italic placeholder:text-slate-400"
        placeholder="Type your message here..."
        id="message"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  );
};

export default InputTextarea;
