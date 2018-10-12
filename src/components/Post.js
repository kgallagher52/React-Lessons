import React, { Component } from 'react'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:null
        };
    }

    componentDidMount(){
        console.log(this.props);
        let id = this.props.match.params.post_id;
        this.setState({
            id: id
        });
    }

    render() {
        return(
            <div className="container">
                <h4>{this.state.id}</h4>
            </div>
        )
    }
}

export default Post;