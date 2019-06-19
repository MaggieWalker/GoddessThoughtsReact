import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
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
        console.log('login type', this.loginType);
        this.loginType === 'sign-up' 
        ? 
        this.props.firebase.createUser(this.state.email, this.state.password)
        .catch(function(err) {
            alert(err.message)
        }) 
        : 
        this.props.firebase.signInUser(this.state.email, this.state.password)
        .catch(function(err) {
            alert(err.message)
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    Email: <input type='text' name='email' placeholder='me@email.com' onChange={this.onChange}/>
                    Password: <input type='text' name='password' placeholder='password' onChange={this.onChange}/>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        )
    }
}

export default LoginForm;