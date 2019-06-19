import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes'

const Landing = () => (
    <div>
        <h1><Link to={ROUTES.HOME}>Goddess Thoughts</Link></h1>
    </div>
);

export default Landing;