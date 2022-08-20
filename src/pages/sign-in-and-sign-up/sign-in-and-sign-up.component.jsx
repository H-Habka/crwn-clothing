import React from "react";
import './sign-in-and-sign-up.style.scss';
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";


const SignInAndSignUp = () => (
    <div className="border flex flex-col md:flex-row justify-around p-4 items-center gap-10 sm:px-10">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUp