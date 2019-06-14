import React from 'react';
import { withFirebase } from '../Firebase/index'

class HomeComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            thoughts: []
        };
    }

    componentDidMount() {
        this.props.firebase.thoughts().once('value', snapshot => {
                //Why aren't we getting into this code??
            const thoughts = snapshot.val();
            const thoughtsList = Object.keys(thoughts);
        
            this.setState({
                thought: thoughtsList
            })
        });
       
    }

    render() {
        return (
            <div>I am connecting to Firebase, maybe!
                {console.log(this.state.thoughts)}
            </div>
        )
    }
} 

const Home = withFirebase(HomeComponent)

export default Home;