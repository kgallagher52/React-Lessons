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



// Actions are object that have a type property also has an optional payload(data)
// type, descripton, payload
const todoAction = { type: 'ADD_TODO', todo: 'buy Milk' };

// dispatch the action
store.dispatch(todoAction);

