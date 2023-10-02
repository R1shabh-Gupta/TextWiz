import { signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { auth } from '../firebase';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type appProps = {
  onIsLoggedIn: (value: boolean) => void;
};

export function Login({ onIsLoggedIn }: appProps) {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [errormsg, setErrormsg] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmit = () => {
    if (!values.email || !values.password) {
      setErrormsg('Fill all fields');
      return;
    }
    setErrormsg('');
    console.log(values);
    setSubmitButtonDisabled(false);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        setSubmitButtonDisabled(false);
        onIsLoggedIn(true);
        console.log(res);
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrormsg(err.message);

        console.log(err.message);
      });
  };

  const handleGuest = () => {
    setErrormsg('');
    setSubmitButtonDisabled(false);
    signInWithEmailAndPassword(auth, 'guest@gmail.com', '123456')
      .then((res) => {
        setSubmitButtonDisabled(false);
        onIsLoggedIn(true);
        console.log(res);
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrormsg(err.message);
        console.log(err.message);
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Log In</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login to your account</DialogTitle>
          <DialogDescription>
            Enter your email below to login to your account
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              className="col-span-3"
              onChange={(event) => {
                setValues((prev) => ({ ...prev, email: event.target.value }));
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              className="col-span-3"
              onChange={(event) => {
                setValues((prev) => ({
                  ...prev,
                  password: event.target.value,
                }));
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <div className="flex justify-center items-center gap-4">
            <p className="text-red-700 font-semibold">{errormsg}</p>
            <Button
              type="submit"
              onClick={handleGuest}
              disabled={submitButtonDisabled}
            >
              Guest
            </Button>
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={submitButtonDisabled}
            >
              Login
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
