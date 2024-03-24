import axios from "axios";
import { getAuth } from "firebase/auth";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const AITextTransformationToolbox = ({
  randomColorGenerator,
  onIsLoggedIn,
  setIsLoading,
  setOutputText,
  inputText,
}: {
  randomColorGenerator: (min: number, max: number) => string;
  onIsLoggedIn: (value: boolean) => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setOutputText: React.Dispatch<React.SetStateAction<string>>;
  inputText: string;
}) => {
  const auth = getAuth();
  const user = auth.currentUser;

  // backend
  const handleCheckGrammmar = async () => {
    if (user) {
      try {
        setIsLoading(true);
        const response = await axios.post(
          "http://r1shabh.pythonanywhere.com/grammarChecker",
          {
            text: inputText,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setIsLoading(false);
        setOutputText(response.data.text);
      } catch (error) {
        console.error("Error summarizing text:", error);
      }
    }
  };

  return (
    <div className="relative mb-16 md:mb-0">
      {/* Is user logged in? */}
      {!user && (
        <div className="absolute z-10 flex items-center justify-center w-full h-full bg-gray-200 rounded-md bg-opacity-40 backdrop-filter backdrop-blur-md dark:bg-gray-600 dark:bg-opacity-40">
          <div className="flex items-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="w-5/6 font-semibold text-center text-md">
                Unlock the Full Power of TextWiz: Sign In to Supercharge Your
                Experience!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
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
            Harness the power of artificial intelligence to make complex tasks
            as simple as a click.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap mt-2 mb-2 gap-x-8 gap-y-4">
          <Button
            className={`${randomColorGenerator(0, 39).toString()}`}
            onClick={handleCheckGrammmar}
          >
            Check Grammmar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AITextTransformationToolbox;
