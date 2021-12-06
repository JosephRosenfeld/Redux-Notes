import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

/*not shown below but function createStore takes a second arg which intializes
the state of the store, this initialization is done in the reducers in this app
however the alternative should be noted and is a viable option*/

/*This is an array of any middleware we might need and then they get destructured 
in the apply middleware function*/
const middleware = [thunk];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
