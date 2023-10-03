import { useState } from 'react';
import axios from 'axios';
import { Button } from './ui/button';
import { getAuth } from 'firebase/auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Signup } from './Signup';
import { Login } from './Login';

type appProps = {
  onIsLoggedIn: (value: boolean) => void;
};

const WorkArea = ({ onIsLoggedIn }: appProps) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCopy, setIsCopy] = useState('Copy');
  const [isCopyIcon, setIsCopyIcon] = useState(false);

  //Funtionality functions
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
      .split(' ')
      .reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)));

    setOutputText(() => finalAns);
  };

  const toCapitalizeLetter = (text: string) => {
    const arr = text.split(' ');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const finalAns = arr.join(' ');
    setOutputText(() => finalAns);
  };

  const toToggleCase = (text: string) => {
    const finalAns = text
      .toUpperCase()
      .split(' ')
      .map(function (word) {
        return word.charAt(0).toLowerCase() + word.slice(1);
      })
      .join(' ');

    setOutputText(() => finalAns);
  };

  const toAlternateCase = (text: string) => {
    const chars = text.toLowerCase().split('');
    for (let i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }

    const finalAns = chars.join('');

    setOutputText(() => finalAns);
  };

  function arrayToBulletPoints(inputArray: Array<string>) {
    const bulletPointArray = inputArray.map((item) => {
      if (
        item === '\n' ||
        item === '\n\n' ||
        item === '\n\n\n' ||
        item === '\n\n\n\n' ||
        item === '\n\n\n\n\n' ||
        item === '\n\n\n\n\n\n\n' ||
        item === '\n\n\n\n\n\n\n\n'
      ) {
        return;
      }
      // Split the element into words and convert to bullet points
      const words = item.split(' ');
      return words.map((word) => `• ${word}`).join(' ');
    });

    return bulletPointArray.join('\n');
  }

  //   Color

  const randomColorGenerator = (min: number, max: number) => {
    const index = Math.floor(Math.random() * (max - min + 1) + min);
    const colorArray = [
      'bg-[#FF6633] shadow-[#FF6633]/30 shadow-lg',
      'bg-[#FFB399] shadow-[#FFB399]/30 shadow-lg',
      'bg-[#FF33FF] shadow-[#FF33FF]/30 shadow-lg',
      'bg-[#FFFF99] shadow-[#FFFF99]/30 shadow-lg',
      'bg-[#00B3E6] shadow-[#00B3E6]/30 shadow-lg',
      'bg-[#E6B333] shadow-[#E6B333]/30 shadow-lg',
      'bg-[#3366E6] shadow-[#3366E6]/30 shadow-lg',
      'bg-[#99FF99] shadow-[#99FF99]/30 shadow-lg',
      'bg-[#B34D4D] shadow-[#B34D4D]/30 shadow-lg',
      'bg-[#80B300] shadow-[#80B300]/30 shadow-lg',
      'bg-[#E6B3B3] shadow-[#E6B3B3]/30 shadow-lg',
      'bg-[#6680B3] shadow-[#6680B3]/30 shadow-lg',
      'bg-[#66991A] shadow-[#66991A]/30 shadow-lg',
      'bg-[#FF99E6] shadow-[#FF99E6]/30 shadow-lg',
      'bg-[#CCFF1A] shadow-[#CCFF1A]/30 shadow-lg',
      'bg-[#FF1A66] shadow-[#FF1A66]/30 shadow-lg',
      'bg-[#E6331A] shadow-[#E6331A]/30 shadow-lg',
      'bg-[#33FFCC] shadow-[#33FFCC]/30 shadow-lg',
      'bg-[#B366CC] shadow-[#B366CC]/30 shadow-lg',
      'bg-[#4D8000] shadow-[#4D8000]/30 shadow-lg',
      'bg-[#CC80CC] shadow-[#CC80CC]/30 shadow-lg',
      'bg-[#991AFF] shadow-[#991AFF]/30 shadow-lg',
      'bg-[#E666FF] shadow-[#E666FF]/30 shadow-lg',
      'bg-[#4DB3FF] shadow-[#4DB3FF]/30 shadow-lg',
      'bg-[#1AB399] shadow-[#1AB399]/30 shadow-lg',
      'bg-[#E666B3] shadow-[#E666B3]/30 shadow-lg',
      'bg-[#33991A] shadow-[#33991A]/30 shadow-lg',
      'bg-[#B3B31A] shadow-[#B3B31A]/30 shadow-lg',
      'bg-[#00E680] shadow-[#00E680]/30 shadow-lg',
      'bg-[#E6FF80] shadow-[#E6FF80]/30 shadow-lg',
      'bg-[#1AFF33] shadow-[#1AFF33]/30 shadow-lg',
      'bg-[#FF3380] shadow-[#FF3380]/30 shadow-lg',
      'bg-[#CCCC00] shadow-[#CCCC00]/30 shadow-lg',
      'bg-[#66E64D] shadow-[#66E64D]/30 shadow-lg',
      'bg-[#9900B3] shadow-[#9900B3]/30 shadow-lg',
      'bg-[#E64D66] shadow-[#E64D66]/30 shadow-lg',
      'bg-[#4DB380] shadow-[#4DB380]/30 shadow-lg',
      'bg-[#FF4D4D] shadow-[#FF4D4D]/30 shadow-lg',
      'bg-[#99E6E6] shadow-[#99E6E6]/30 shadow-lg',
      'bg-[#6666FF] shadow-[#6666FF]/30 shadow-lg',
    ];
    const color = colorArray[index];
    return color;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
    setIsCopy('Copied');
    setIsCopyIcon(true);
    setTimeout(() => {
      setIsCopy('Copy');
      setIsCopyIcon(false);
    }, 1500);
  };

  // backend
  const handleSummarize = async () => {
    if (user) {
      try {
        setIsLoading(true);
        const response = await axios.post(
          'https://r1shabh.pythonanywhere.com/summarize',
          {
            text: inputText,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        setIsLoading(false);
        setOutputText(response.data.summary);
      } catch (error) {
        console.error('Error summarizing text:', error);
      }
    }
  };

  const handleKeyword = async () => {
    if (user) {
      try {
        setIsLoading(true);
        const response = await axios.post(
          'https://r1shabh.pythonanywhere.com/keyword',
          {
            text: inputText,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        setIsLoading(false);
        console.log(response.data);
        const result = arrayToBulletPoints(response.data.keywords);

        setOutputText(result);
      } catch (error) {
        console.error('Error extracting keywords:', error);
      }
    }
  };

  // const handleGrammerCheck = async () => {
  //   if (user) {
  //     try {
  //       console.log(inputText);
  //       const response = await axios.post(
  //         'http://localhost:5000/correctedtext',
  //         {
  //           text: inputText,
  //         }
  //       );
  //       console.log(response.data.grammar_errors);
  //       setOutputText(response.data.grammar_errors);
  //     } catch (error) {
  //       console.error('Error Grammer checking:', error);
  //     }
  //   }
  // };

  // const handleCorrectedText = async () => {
  //   if (user) {
  //     try {
  //       console.log(inputText);
  //       const response = await axios.post(
  //         'http://localhost:5000/correctedtext',
  //         {
  //           text: inputText,
  //         }
  //       );
  //       console.log(response.data.corrected_text);
  //       setOutputText(response.data.corrected_text);
  //     } catch (error) {
  //       console.error('Error while checking spelling:', error);
  //     }
  //   }
  // };

  return (
    <>
      <div className="flex flex-col h-[calc(100vh-54px)] items-center absolute bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] dark:bg-[size:14px_24px]">
        {/* TextArea */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 w-[80%]">
          {/* Input Textarea */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="message" className="text-lg mb-2">
              Input Text
            </Label>
            <Textarea
              className="placeholder:italic placeholder:text-slate-400 resize-y"
              placeholder="Type your message here..."
              id="message"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />
          </div>

          {/* Output Textarea */}
          <div className="flex flex-col">
            <div className="flex justify-between">
              <Label htmlFor="message" className="text-lg">
                Output Text
              </Label>
              <Button
                variant={'outline'}
                className="transition-all ease-in-out mb-2"
                onClick={() => {
                  copyToClipboard();
                }}
              >
                {!isCopyIcon ? (
                  <>
                    {isCopy}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-6 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    {isCopy}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-6 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                      />
                    </svg>
                  </>
                )}
              </Button>
            </div>
            <div className="relative">
              {/* Loading spinner */}
              {isLoading && (
                <div className="absolute bg-gray-400 z-10 h-full w-full flex items-center justify-center rounded-md bg-opacity-40">
                  <div className="flex items-center">
                    <div
                      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    >
                      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <Textarea
                className="placeholder:italic placeholder:text-slate-400 top-0"
                placeholder="Output will be displayed here :)"
                id="message"
                value={outputText}
                onChange={() => {
                  setOutputText(inputText);
                }}
              />
            </div>
          </div>
        </div>

        {/* Functions Heading */}
        <h2 className="text-3xl font-semibold tracking-tight transition-colors mt-10 text-center">
          Text{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Transformation
          </span>{' '}
          Toolbox
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 w-[80%]">
          {/* Non-AI */}
          <Card>
            <CardHeader>
              <CardTitle>Text Enhancement Toolkit</CardTitle>
              <CardDescription>
                Effortlessly manipulate text with simple tools for precise
                control over your content.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-x-8 gap-y-4 mt-2 mb-2">
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
            </CardContent>
          </Card>

          {/* AI */}

          <div className="relative mb-16 md:mb-0">
            {/* Is user logged in? */}
            {!user && (
              <div className="absolute bg-gray-200 z-10 h-full w-full flex items-center justify-center rounded-md bg-opacity-40 backdrop-filter backdrop-blur-md dark:bg-gray-600 dark:bg-opacity-40">
                <div className="flex items-center">
                  <div className="flex flex-col items-center justify-center gap-4">
                    <p className="font-semibold text-md w-5/6 text-center">
                      Unlock the Full Power of TextWiz: Sign In to Supercharge
                      Your Experience!
                    </p>
                    <div className="flex gap-4 flex-wrap items-center justify-center">
                      <Login onIsLoggedIn={onIsLoggedIn} isbutton={true} />
                      <Signup
                        type="default"
                        onIsLoggedIn={onIsLoggedIn}
                        isbutton={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <Card>
              <CardHeader>
                <CardTitle>AI Text Wizardry</CardTitle>
                <CardDescription>
                  Harness the power of artificial intelligence to make complex
                  tasks as simple as a click.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-x-8 gap-y-4 mt-2 mb-2">
                <Button
                  className={`${randomColorGenerator(0, 39).toString()}`}
                  onClick={handleSummarize}
                >
                  Text Summarization
                </Button>
                <Button
                  className={`${randomColorGenerator(0, 39).toString()}`}
                  onClick={handleKeyword}
                >
                  keyword Extract
                </Button>
                {/* <Button
                  className={`${randomColorGenerator(0, 39).toString()}`}
                  onClick={handleCorrectedText}
                >
                  Spelling Checker
                </Button> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkArea;
