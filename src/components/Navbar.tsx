import { Login } from './Login';
import { getAuth, signOut } from 'firebase/auth';
import { Signup } from './Signup';
import { ModeToggle } from './mode-toggle';
import { NavigationMenu } from './ui/navigation-menu';
import { Button } from './ui/button';

const Navbar = ({ onIsLoggedIn, isLoggedIn }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        onIsLoggedIn(false);
        console.log('Successfully signout');
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };

  return (
    <>
      <nav className="flex justify-between py-2 px-10 items-center bg-slate-50 dark:bg-[#0a0a0b]">
        <h1 className="font-bold text-xl antialiased">TextWiz.</h1>

        {/* menu */}
        <div className="flex gap-5">
          <NavigationMenu className="flex gap-2">
            {!isLoggedIn ? (
              <>
                <Login onIsLoggedIn={onIsLoggedIn} />
                <Signup type="" onIsLoggedIn={onIsLoggedIn} />
              </>
            ) : (
              <div className="flex items-center justify-center gap-4">
                <h3 className="hidden md:block">
                  Welcome! {user?.displayName}
                </h3>
                <Button onClick={handleSignOut} variant="outline">
                  Sign Out
                </Button>
              </div>
            )}
          </NavigationMenu>
          {/* dark mode */}
          <ModeToggle />
        </div>
      </nav>

      {/* Divider */}
      <div className="divide-y h-[1px] w-full bg-slate-300" />
    </>
  );
};

export default Navbar;
