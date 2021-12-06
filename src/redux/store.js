import { createStore } from "redux";
import reducers from "./reducers/index";

/*not shown below but function createStore takes a second arg which intializes
the state of the store, this initialization is done in the reducers in this app
however the alternative should be noted and is a viable option*/
export const store = createStore(reducers);
