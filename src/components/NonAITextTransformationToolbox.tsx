import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const NonAITextTransformationToolbox = ({
  setOutputText,
  inputText,
  randomColorGenerator,
}: {
  setOutputText: React.Dispatch<React.SetStateAction<string>>;
  inputText: string;
  randomColorGenerator: (min: number, max: number) => string;
}) => {
  const toUppercase = (text: string) => {
    setOutputText(() => text.toUpperCase());
  };

  const toLowercase = (text: string) => {
    setOutputText(() => text.toLowerCase());
  };

  const tocamelCase = (text: string) => {
    const ans = text.toLowerCase();

    // Returning string to camelcase
    const finalAns = ans
      .split(" ")
      .reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));

    setOutputText(() => finalAns);
  };

  const toCapitalizeLetter = (text: string) => {
    const arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const finalAns = arr.join(" ");
    setOutputText(() => finalAns);
  };

  const toToggleCase = (text: string) => {
    const finalAns = text
      .toUpperCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toLowerCase() + word.slice(1);
      })
      .join(" ");

    setOutputText(() => finalAns);
  };

  const toAlternateCase = (text: string) => {
    const chars = text.toLowerCase().split("");
    for (let i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }

    const finalAns = chars.join("");

    setOutputText(() => finalAns);
  };

  function removeExtraSpaces(text: string) {
    const regex = /\s+/g;
    const finalAns = text.replace(regex, " ");
    setOutputText(() => finalAns);
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Text Enhancement Toolkit</CardTitle>
          <CardDescription>
            Effortlessly manipulate text with simple tools for precise control
            over your content.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap mt-2 mb-2 gap-x-8 gap-y-4">
          <Button
            className={`${randomColorGenerator(0, 39).toString()}`}
            onClick={() => toUppercase(inputText)}
          >
            UPPERCASE
          </Button>
          <Button
            className={`${randomColorGenerator(0, 39).toString()}`}
            onClick={() => toLowercase(inputText)}
          >
            lowercase
          </Button>
          <Button
            className={`${randomColorGenerator(0, 39).toString()}`}
            onClick={() => tocamelCase(inputText)}
          >
            camelCase
          </Button>
          <Button
            className={`${randomColorGenerator(0, 39).toString()}`}
            onClick={() => toCapitalizeLetter(inputText)}
          >
            Capitalize Word
          </Button>
          <Button
            className={`${randomColorGenerator(0, 39).toString()}`}
            onClick={() => toToggleCase(inputText)}
          >
            tOGGLE cASE
          </Button>
          <Button
            className={`${randomColorGenerator(0, 39).toString()}`}
            onClick={() => toAlternateCase(inputText)}
          >
            aLtErNaTe cAsE
          </Button>

          <Button
            className={`${randomColorGenerator(0, 39).toString()}`}
            onClick={() => removeExtraSpaces(inputText)}
          >
            Whitespaces Remover
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default NonAITextTransformationToolbox;
