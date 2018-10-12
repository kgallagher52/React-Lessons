import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import yoda from '../assets/images/Yoda.png';
import anotherJedi from '../assets/images/New.png';
import darth from '../assets/images/Darth-Vader.png';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [ ]
        };
    }

    // This is a great lifecycle to grab data
    componentDidMount() {
        // This is asyncrynos 
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                this.setState({
                    posts: res.data.slice(0,10)
                });
            });
    }   

    render(){
        const { posts } = this.state;
        const images = [darth, anotherJedi,yoda];
        const postList = posts.length ? ( 
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img className="jedi-image" src={images[Math.floor(Math.random()*images.length)]} alt="image"/>
                        <div className="card-content">
                            <NavLink to={'/' + post.id}><span className="card-title">{post.title}</span></NavLink>
                            {post.body}
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No Posts Yet</div>
        )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home;