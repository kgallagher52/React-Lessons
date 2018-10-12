import React, { Component } from 'react'
import axios from 'axios';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        };
    }

    componentDidMount(){
        console.log(this.props);
        let id = this.props.match.params.post_id;
        axios.get('http://jsonplaceholder.typicode.com/posts/' + id).then(res => {
            this.setState({
                id: id,
                post: res.data

            });
        });

    }

    render() {
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                {this.state.post.body}
            </div>
        ) : (
            <div className="center">
                <h1>Loading Post...</h1>
            </div>
        )

        return(
            <div className="container">
                { post }
            </div>
        )
    }
}

export default Post;