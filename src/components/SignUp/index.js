import React from 'react';
import LoginForm from '../LoginForm';
import {Link} from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

const SignUp = () => (
    <div>
        <h2>Sign Up</h2>
        <LoginForm loginType={'sign-up'}/>
    </div>
);


const SignUpLink = () => (
    <div>Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign up here</Link></div>
);

export { SignUpLink }
export default SignUp;