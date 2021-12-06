import { DEPOSIT, WITHDRAW } from "../constants/accountConstants";

/*Technically all the below are action creators. Action creators are functions which
dispatch objects called actions. Those actions have a type and a payload property and 
those properties are used by the reducer to determine how the state should be updated*/

/*Typically you'd house all the action creators for a piece of state within one file
called {stateVar}Actions.js. This file will house several functions that all dispatch
some action object. This is where you'd see http requests or requests to our servers 
or any other asynchronous type of things, or just things that require code before
we dispatch the payload*/

//---Thunk---//
/*essentially the way redux-thunk works is that it will check to see if your action
creator is returning a function instead of an object (remember the action is an object)
if it is returning a function then the middleware intercepts it and passes it the
dispatch function.*/

/*Also with asynchronous actions its pretty typical to have three dispatches between
one single action creator like shown below: (one for loading, one for success, one for failure)
export const fetchQuote = () => (dispatch) => {
  dispatch({type: FETCH_QUOTE_REQUEST}); //state can be set to loading here

  const quoteUrl = 'https://zenquotes.io/api/random';

  fetch(quoteUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return dispatch({type: FETCH_QUOTE_SUCCESS, payload: data}); //successful dispatch
    })
    .catch((err) => dispatch({type: FETCH_QUOTE_FAIL, payload: err})); //error dispatch


}
/*Asynchronous action creators*/
export const depositMoney = (amt) => (dispatch) => {
  dispatch({
    type: DEPOSIT,
    payload: amt,
  });
};

export const withdrawMoney = (amt) => (dispatch) => {
  dispatch({
    type: WITHDRAW,
    payload: amt,
  });
};

/*Below are action creators which work fine if the logic to return the action is all
synchronous, however if its asynchronous you need to use the thunk middleware library and 
wrap the action in another function*/
/*Synchronous action creators*/
/*export const depositMoney = (amt) => {
  return {
    type: DEPOSIT,
    payload: amt,
  };
};

export const withdrawMoney = (amt) => {
  return {
    type: WITHDRAW,
    payload: amt,
  };
};*/
