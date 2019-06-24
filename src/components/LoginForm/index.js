import React from 'react';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase'
import { compose } from 'redux';


class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.loginType = this.props.loginType
    }

    onChange =(e)=> {
        let input = e.target;
        this.setState({
            [input.name]: input.value
        })
    }

    onSubmit = (event)=> {
        event.preventDefault()
        event.target['email'].value = '';
        event.target['password'].value = '';
        this.loginType === 'sign-up' 
        ? 
        //For sign-ups
        this.props.firebase.createUser(this.state.email, this.state.password)
        .then(() => {
            this.props.firebase.writeUser(this.state.email);
            this.props.history.push(ROUTES.HOME) 
            alert(`Welcome ${this.state.email}!`)

        })
        .catch((err) => {
            console.log('err', err)
            alert(err.message)
        })
        : 
        //For sign-ins
        this.props.firebase.signInUser(this.state.email, this.state.password)
        .then(() => {
            this.props.history.push(ROUTES.HOME)
        })
        .catch((err) => {
           alert(err.message)
        })
    }

    render() {
        const isInvalid = 
        //continue adding validation
        this.state.password.length < 6 ||
        this.state.email === '';
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    Email: <input type='text' name='email' placeholder='me@email.com' onChange={this.onChange}/>
                    Password: <input type='text' name='password' placeholder='password' onChange={this.onChange}/>
                    <input type='submit' value='Submit' disabled={isInvalid}/>
                </form>
            </div>
        )
    }
}

export default compose(withRouter, withFirebase)(LoginForm);