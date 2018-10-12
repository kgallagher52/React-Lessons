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
    // Changing the state
    if (action.type == 'ADD_TODO' ) {
        return {
            // New state of the store being returned
            ...state, //This is a spread operator that grabs the whole state but only changes one that is specified 
            todos: [...state.todos, action.todo]
            // We are adding to the state like this so we do not edit the state directly
        }
    }


}


// Create the store
const store = createStore(myReducer);
// Setting Up subscriptions the things that will listen for changes from the store
store.subscribe(() => {
    console.log('state updated');
    console.log('Current state', store.getState());
})



// Actions are object that have a type property also has an optional payload(data)
// type, descripton, payload
const todoAction = { type: 'ADD_TODO', todo: 'buy Milk' };

// dispatch the action
store.dispatch(todoAction);

