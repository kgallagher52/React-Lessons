import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    // This is a great lifecycle to grab data
    componentDidMount() {
        // This is asyncrynos 
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
            });
    }   

    render(){

        return (
            <div className="container">
                <h4 className="center">Home</h4>
                <p>lorem ipsum is the friend I like to have</p>
            </div>
        )
    }
}

export default Home;