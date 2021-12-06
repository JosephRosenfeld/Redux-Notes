import { DEPOSIT, WITHDRAW } from "../constants/accountConstants";

/*Technically al the below are action creators. Action creators are functions which
dispatch objects called actions. Those actions have a type and a payload property and 
those properties are used by the reducer to determine how the state should be updated*/

/*Typically you'd house all the action creators for a piece of state within one file
called {stateVar}Actions.js. This file will house several functions that all dispatch
some action object. This is where you'd see http requests or requests to our servers 
or any other asynchronous type of things*/
