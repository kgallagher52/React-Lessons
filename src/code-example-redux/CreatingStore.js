// First import store from redux
import Redux,{ createStore } from 'redux';

// Creating an initial state 
const initState = {
    todos: [],
    posts: []
}

// Create the reducer function that will be passed into the store
function myReducer(state = initState, action){   
    // In function is where we do the interacting with the store
 

}


// Create the store
const store = createStore(myReducer);