import { useState } from "react";
import Tesseract from "tesseract.js";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const OCRTextExtractor = ({
  setInputText,
}: {
  setInputText: (text: string) => void;
}) => {
  const [picture, setPicture] = useState<File>();
  const [isLoading, setIsLoading] = useState(false);

  function pressEscapeKey() {
    const escKeyEvent = new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true,
      cancelable: true,
    });

    document.dispatchEvent(escKeyEvent);
  }

  const onAddingImg = (event: React.FormEvent) => {
    const files = (event.target as HTMLInputElement).files;

    if (files && files.length > 0) {
      setPicture(files[0]);
      console.log(picture);
    }
  };

  const handleOCR = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      if (picture) {
        const result = await performOCR(picture);
        // Update the state with the OCR result
        setInputText(result);
        pressEscapeKey();
        setIsLoading(false);
        // console.log(result);
      } else {
        console.error("No image selected");
      }
    } catch (error) {
      console.error("Error summarizing text:", error);
    }
  };

  const performOCR = async (imageFile: File) => {
    try {
      const {
        data: { text },
      } = await Tesseract.recognize(imageFile, "eng", {
        logger: (info) => console.log(info),
      });

      return text;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">OCR</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Image to Text Magic</DialogTitle>
          <DialogDescription>
            Revolutionize your workflow with our OCR feature, effortlessly
            transform images into editable text.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="name" className="text-right">
              Upload file
            </Label>
            <Input
              id="name"
              className="col-span-3"
              type="file"
              accept="image/*"
              onChange={onAddingImg}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleOCR}>
            {isLoading ? "Processing" : "Submit"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OCRTextExtractor;
