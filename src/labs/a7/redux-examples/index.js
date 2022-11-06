import React from "react";

import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
import {Provider} from "react-redux";
import {createStore} from "redux";
import { configureStore }
    from '@reduxjs/toolkit';


import Todos from "./reducers/todos-component";
import HelloReduxExampleComponent from "./reducers/hello-redux-example-component";
const store = configureStore({
                                 reducer: {hello, todos}
                             });



const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;

