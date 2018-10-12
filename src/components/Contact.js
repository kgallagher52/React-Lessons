import React from 'react';

const Contact = (props) => {
    console.log(props);
// This function is using one of the props fields to swithc page to about after Two seconds
    setTimeout(() => {
        props.history.push('/about');
    },2000);

    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>lorem ipsum is the friend I like to have</p>
        </div>
    )
}

export default Contact;