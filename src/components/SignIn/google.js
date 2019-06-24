import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import * as ROUTES from "../../constants/routes";

class SignInGoogleComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
        }
    }

    onSubmit = (event) => {
        this.props.firebase.signInWithGoogle()
        .then(currUser => {
            this.props.firebase.users().push({
                userId: currUser.user.uid,
                name: currUser.user.displayName,
                email: currUser.user.email
            })
            this.setState({ error: null });
            this.props.history.push(ROUTES.HOME)
        })
        .catch(error => {
            this.setState({ error: error})
        });
        event.preventDefault();
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <button>Sign In With Google</button>
                    {this.state.error && <p>{this.state.error.message}</p>}
                </form>
            </div>
        )
    }
}
const SignInGoogle = compose(withFirebase, withRouter)(SignInGoogleComponent)
export default SignInGoogle;