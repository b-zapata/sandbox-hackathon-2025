// src/components/NavBar.tsx
import { Authenticator } from "@aws-amplify/ui-react";

interface NavBarProps {
  signOut: () => void;
  username: string | undefined;
}

const NavBar = ({ signOut, username }: NavBarProps) => {
  return (
    <header className="w-full flex justify-between p-4">
      <p>Welcome, {username}</p>
      <p>Hellooo</p>
      <p>Howdy</p>
      <button
        onClick={signOut}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Sign out
      </button>
    </header>
  );
};

export default NavBar;
