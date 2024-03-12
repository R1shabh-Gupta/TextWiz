import CopyButton from "./CopyButton";
import Loader from "./Loader";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type OutputTextareaProps = {
  outputText: string;
  isLoading: boolean;
  setOutputText: (text: string) => void;
};

const OutputTextarea = ({
  outputText,
  isLoading,
  setOutputText,
}: OutputTextareaProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <Label htmlFor="message" className="text-lg">
          Output Text
        </Label>
        <CopyButton outputText={outputText} />
      </div>
      <div className="relative">
        {isLoading && <Loader />}
        <Textarea
          className="top-0 placeholder:italic placeholder:text-slate-400"
          placeholder="Output will be displayed here :)"
          id="message"
          value={outputText}
          onChange={(e) => setOutputText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default OutputTextarea;
