import React from 'react';

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {
        //firebase in this case is whatever value is passed into the Provider
        //in this case, an instance of the Firebase class
        }
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
)
export default FirebaseContext;