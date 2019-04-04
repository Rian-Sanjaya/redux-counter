import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const intitialState = {
    count: 0
};

function reducer(state = intitialState, action) {
    // console.log(action);
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            };

        case "DECREMENT":
            return {
                count: state.count - 1
            }

        default:
            return state
    }
}

const store = createStore(reducer);

// store.dispatch({ type: "INCREMENT", amount: 5 });
// store.dispatch({ type: "DECREMENT" });

const App = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
