import { SignUp } from "@clerk/nextjs";

export const metadata = {
  title: "SecondBrain - Sign Up",
};

export default function SignUpPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignUp appearance={{ variables: { colorPrimary: "#0F172A" } }} />
    </div>
  );
}
