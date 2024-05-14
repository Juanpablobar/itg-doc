import { useSession } from "next-auth/react";

import GoogleSignInButton from "./components/GoogleSignIn";
import ProfileButton from "./components/ProfileButton";

const SignInButton = () => {
  const { data: session } = useSession();

  return !session ? <GoogleSignInButton /> : <ProfileButton />;
};

export default SignInButton;
