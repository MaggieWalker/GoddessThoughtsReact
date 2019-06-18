import React from 'react';
import { withFirebase } from '../Firebase'

class AdminComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        };
    }

    componentDidMount() {
        this.props.firebase.users().on('value', dataSnapshot => {
            let users = dataSnapshot.val()
            let usersList = Object.keys(users).map(key => ({[key]: users[key]}))
            console.log(usersList)

            this.setState({
                users: usersList
            })

        })
    }
    render () {
        return (
        <div>
            <h2>Admins:</h2>
            <ul>
                {this.state.users.map(user => (
                    <li key= {Object.keys(user)}>{Object.keys(user)}: {user[Object.keys(user)]}</li>
                ))}
            </ul>
        </div>
        )
    }
}

const Admin = withFirebase(AdminComponent);
export default Admin;