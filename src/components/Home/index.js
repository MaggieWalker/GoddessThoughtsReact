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
        console.log('firebase props', this.props.firebase)
        window.thingo = this.props.firebase;
        this.props.firebase.thoughts().on('value', snapshot => {
            const thoughts = snapshot.val();
            const thoughtsList = Object.keys(thoughts).map(key => thoughts[key])
        
            this.setState({
                thoughts: thoughtsList
            })
        }, console.log);
       
    }

    render() {
        return (
            <div>The Goddesses' Thoughts: 
                <ul>
                   {this.state.thoughts.map(thought =><li key={thought}>{thought}</li>)} 
                </ul>
            </div>
        )
    }
} 

const Home = withFirebase(HomeComponent)

export default Home;