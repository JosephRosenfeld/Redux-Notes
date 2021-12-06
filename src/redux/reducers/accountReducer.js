/*This way if we need to change our constants used in action type switching we can
just do it from one central file*/
import { DEPOSIT, WITHDRAW } from "../constants/accountConstants";

/*reducers are functions which take two arguments, the state (which should be initialized)
and the action. Then they switch based on the action type and change the state with 
the corresponding logic. They will also typically utilize the action.payload which
should have some info thats critical to updating the state*/
/*you'll usually see a naming convention of the {stateReducer} and then this reducer will
handle all the different action types which could have been dispatched in order to mutate
that piece of state*/
/*If the initial state is complex you might see an initState var made like below:
const initState = {
  blah: blah,
  blahblah: blahdkd
}
*/

/*"When a store is created redux dispatches a dummy action to your reducer
to populate the store with the initial state"*/

/*You can initialize the state of your store in the reducer as is done below, however,
if you have a bunch of reducers this can be very tedious and it may be better 
to initialize the state on the store*/

export const accountReducer = (state = 0, action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload; //return the updated state
    case WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};
