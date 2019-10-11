import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import yoda from '../assets/images/Yoda.png';
import anotherJedi from '../assets/images/New.png';
import darth from '../assets/images/Darth-Vader.png';
import { connect } from 'react-redux';

class Home extends Component {
    
    render(){
        console.log(this.props);
        const { posts } = this.props;
        const images = [darth, anotherJedi,yoda];
        const postList = posts.length ? ( 
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img className="jedi-image" src={images[Math.floor(Math.random()*images.length)]} alt={post.title}/>
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
// map state to props into connect function below
const mapStateToProps = (state) => {
    // Represents different propreties we want to add
    return {
        posts: state.posts
    }

}

// provoking the connect function and then wrapping the home component to pass a higher order component
export default connect(mapStateToProps)(Home);