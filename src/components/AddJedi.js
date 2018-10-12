import React, { Component } from 'react';

class AddJedi extends Component {
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name"  onChange={} placeholder="Name"/>

                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age"  onChange={} placeholder="Age"/>

                    <label htmlFor="saber">Saber:</label>
                    <input type="text" id="saber"  onChange={} placeholder="Saber Color"/>

                    <button>Submit</button>

     

                </form>
            </div>

        )
    }
};

export default AddJedi;