import React from 'react';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            err: null
        }

        this.loginType = this.props.loginType
    }

    onTest =(e)=> {
        console.log('event', e, 'event name', e.target.name)
        console.log({[e.target.name]: e.target.value})
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
        .catch((err) => {
            this.setState({
                err: err
            })
            alert(err.message)
        }).then(() => {
            if (this.state.err !== null) {
                this.setState({
                    err: null
                })
            } else {
                this.props.firebase.writeUser(this.state.email);
                this.props.history.push(ROUTES.HOME) 
                alert(`Welcome ${this.state.email}!`)
            }
        })
        : 
        //For sign-ins
        this.props.firebase.signInUser(this.state.email, this.state.password)
        .catch(function(err) {
            if (err){
                alert(err.message)
            }
            else {
                console.log('are we here')
                this.props.history.push(ROUTES.HOME)
            }
        })
    }

    render() {
        const isInvalid = 
        this.state.password.length < 6 ||
        this.state.password === '' || 
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

export default withRouter(LoginForm);