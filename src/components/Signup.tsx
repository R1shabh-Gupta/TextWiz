import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
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

export function Signup({ type, onIsLoggedIn }) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errormsg, setErrormsg] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmit = () => {
    if (!values.name || !values.email || !values.password) {
      setErrormsg('Fill all fields');
      return;
    }
    setErrormsg('');
    console.log(values);
    setSubmitButtonDisabled(false);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        onIsLoggedIn(true);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
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
        <Button variant={`${type ? type : 'outline'}`}>Sign Up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create an account</DialogTitle>
          <DialogDescription>
            Enter your email below to create your account
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Rishabh Gupta"
              className="col-span-3"
              onChange={(event) => {
                setValues((prev) => ({ ...prev, name: event.target.value }));
              }}
            />
          </div>
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
              onClick={handleSubmit}
              disabled={submitButtonDisabled}
            >
              Sign Up
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
