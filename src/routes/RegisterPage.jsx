import { SignUp } from "@clerk/clerk-react";

const RegisterPage = () => {
  return (
    <div className="flex times-center justify-center h-[calc(100vh-80px)]">
      <SignUp signInUrl="/login" />
    </div>
  );
};

export default RegisterPage;
