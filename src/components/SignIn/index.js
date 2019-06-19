import React from 'react';
import { SignUpForm, SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';

const SignInComponent = () => (
    <div>
        <div>
            <h2>Sign In</h2>
            <SignUpForm loginType={'sign-in'}/>
        </div>
        <br/>
        <div>
            <SignUpLink />
        </div>
    </div>
);

const SignIn = withFirebase(SignInComponent)

export default SignIn;