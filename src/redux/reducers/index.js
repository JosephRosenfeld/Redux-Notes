import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer";

/*This is where we take all of the reducers we may have (likely to have one per 
each piece of global state we want to maintain) and combine them into one*/
/*the key name here will end up becoming the name of the state variable when accessed
elsewhere, so name it carefully*/
const reducers = combineReducers({
  account: accountReducer,
});

export default reducers;
