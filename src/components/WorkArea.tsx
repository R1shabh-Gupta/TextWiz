import { useState } from "react";
import AITextTransformationToolbox from "./AITextTransformationToolbox";
import CopyButton from "./CopyButton";
import Loader from "./Loader";
import NonAITextTransformationToolbox from "./NonAITextTransformationToolbox";
import OCRTextExtractor from "./OCRTextExtractor";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type appProps = {
  onIsLoggedIn: (value: boolean) => void;
};

// Array of colors
const colorArray = [
  "bg-[#FF6633] shadow-[#FF6633]/30 shadow-lg",
  "bg-[#FFB399] shadow-[#FFB399]/30 shadow-lg",
  "bg-[#FF33FF] shadow-[#FF33FF]/30 shadow-lg",
  "bg-[#FFFF99] shadow-[#FFFF99]/30 shadow-lg",
  "bg-[#00B3E6] shadow-[#00B3E6]/30 shadow-lg",
  "bg-[#E6B333] shadow-[#E6B333]/30 shadow-lg",
  "bg-[#3366E6] shadow-[#3366E6]/30 shadow-lg",
  "bg-[#99FF99] shadow-[#99FF99]/30 shadow-lg",
  "bg-[#B34D4D] shadow-[#B34D4D]/30 shadow-lg",
  "bg-[#80B300] shadow-[#80B300]/30 shadow-lg",
  "bg-[#E6B3B3] shadow-[#E6B3B3]/30 shadow-lg",
  "bg-[#6680B3] shadow-[#6680B3]/30 shadow-lg",
  "bg-[#66991A] shadow-[#66991A]/30 shadow-lg",
  "bg-[#FF99E6] shadow-[#FF99E6]/30 shadow-lg",
  "bg-[#CCFF1A] shadow-[#CCFF1A]/30 shadow-lg",
  "bg-[#FF1A66] shadow-[#FF1A66]/30 shadow-lg",
  "bg-[#E6331A] shadow-[#E6331A]/30 shadow-lg",
  "bg-[#33FFCC] shadow-[#33FFCC]/30 shadow-lg",
  "bg-[#B366CC] shadow-[#B366CC]/30 shadow-lg",
  "bg-[#4D8000] shadow-[#4D8000]/30 shadow-lg",
  "bg-[#CC80CC] shadow-[#CC80CC]/30 shadow-lg",
  "bg-[#991AFF] shadow-[#991AFF]/30 shadow-lg",
  "bg-[#E666FF] shadow-[#E666FF]/30 shadow-lg",
  "bg-[#4DB3FF] shadow-[#4DB3FF]/30 shadow-lg",
  "bg-[#1AB399] shadow-[#1AB399]/30 shadow-lg",
  "bg-[#E666B3] shadow-[#E666B3]/30 shadow-lg",
  "bg-[#33991A] shadow-[#33991A]/30 shadow-lg",
  "bg-[#B3B31A] shadow-[#B3B31A]/30 shadow-lg",
  "bg-[#00E680] shadow-[#00E680]/30 shadow-lg",
  "bg-[#E6FF80] shadow-[#E6FF80]/30 shadow-lg",
  "bg-[#1AFF33] shadow-[#1AFF33]/30 shadow-lg",
  "bg-[#FF3380] shadow-[#FF3380]/30 shadow-lg",
  "bg-[#CCCC00] shadow-[#CCCC00]/30 shadow-lg",
  "bg-[#66E64D] shadow-[#66E64D]/30 shadow-lg",
  "bg-[#9900B3] shadow-[#9900B3]/30 shadow-lg",
  "bg-[#E64D66] shadow-[#E64D66]/30 shadow-lg",
  "bg-[#4DB380] shadow-[#4DB380]/30 shadow-lg",
  "bg-[#FF4D4D] shadow-[#FF4D4D]/30 shadow-lg",
  "bg-[#99E6E6] shadow-[#99E6E6]/30 shadow-lg",
  "bg-[#6666FF] shadow-[#6666FF]/30 shadow-lg",
];

const WorkArea = ({ onIsLoggedIn }: appProps) => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to generate a random color
  const generateRandomColor = (min: number, max: number) => {
    const randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
    return colorArray[randomIndex];
  };

  return (
    <>
      <div className="flex flex-col h-[calc(100vh-54px)] items-center absolute bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] dark:bg-[size:14px_24px]">
        {/* TextAreas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 w-[80%]">
          {/* Input Textarea */}
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

          {/* Output Textarea */}
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
                onChange={() => setOutputText(inputText)}
              />
            </div>
          </div>
        </div>

        {/* Toolboxes */}
        <h2 className="mt-10 text-3xl font-semibold tracking-tight text-center transition-colors">
          Text{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Transformation
          </span>{" "}
          Toolbox
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 w-[80%]">
          <NonAITextTransformationToolbox
            setOutputText={setOutputText}
            inputText={inputText}
            randomColorGenerator={generateRandomColor}
          />
          <AITextTransformationToolbox
            randomColorGenerator={generateRandomColor}
            onIsLoggedIn={onIsLoggedIn}
            setIsLoading={setIsLoading}
            setOutputText={setOutputText}
            inputText={inputText}
          />
        </div>
      </div>
    </>
  );
};

export default WorkArea;
