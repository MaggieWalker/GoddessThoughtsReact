import React from 'react';
import { SignUpForm } from '../SignUp';
import { withFirebase } from '../Firebase';


const SignInComponent = () => (
    <div>
        <h2>Sign In</h2>
        <SignUpForm />
    </div>
);

const SignIn = withFirebase(SignInComponent)

export default SignIn;