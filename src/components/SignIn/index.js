import React from 'react';
import { SignUpLink } from '../SignUp';
import SignInGoogle from '../SignIn/google'
import LoginForm from '../LoginForm';

const SignIn = () => (
    <div>
        <h2>Sign In</h2>
        <LoginForm loginType={'sign-in'}/>
        <br/>
        <SignInGoogle />
        <br/>
        <SignUpLink />
    </div>
);

export default SignIn;