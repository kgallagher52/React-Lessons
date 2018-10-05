import React, { Component } from 'react';

class Jedi extends Component {
    render() {
        const { name, age, saber } = this.props;
        return(
            <div className="jedi">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Saber: {saber}</div>
            </div>
        );
    }
}

export default Jedi;