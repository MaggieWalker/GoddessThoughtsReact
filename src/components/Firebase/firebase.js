import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
}

class Firebase{
    constructor() {
        app.initializeApp(config);
        this.db = app.database();
        this.auth = app.auth();

    //Clarify what this provider method returns
        this.googleProvider = new app.auth.GoogleAuthProvider()
    }
    //Connecting to different parts of the database
    thoughts = () => this.db.ref('thoughts');
    users = () => this.db.ref('users');

    //Writing to database
    writeThought = (thought) => this.db.ref('thoughts').push(thought);
    writeUser = (user) => this.db.ref('users').push(user);

    //Auth methods
    createUser = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
    signInUser = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
    signInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

    signOutUser = () => this.auth.signOut();
    passwordReset = (email) => this.auth.sendPasswordResetEmail(email);
    passwordUpdate = (password) => this.auth.currentUser.updatePassword(password);
}

export default Firebase;