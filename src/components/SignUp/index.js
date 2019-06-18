import React from 'react';
import { withFirebase } from '../Firebase'
import LoginForm from '../LoginForm';

const SignUp = () => (
    <div>
        <h2>Sign Up</h2>
        <SignUpForm />
    </div>
);

const SignUpForm = withFirebase(LoginForm)
export { SignUpForm }

export default SignUp;