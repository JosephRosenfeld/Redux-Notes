import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { depositMoney, withdrawMoney } from "./redux/actions/accountActions";

const App = () => {
  //get state
  const state = useSelector((state) => {
    return state.account;
  });

  //setup dispatcher
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <button
        onClick={() => {
          dispatch(withdrawMoney(10));
        }}
      >
        Withdraw
      </button>
      <h1>{state}</h1>
      <button
        onClick={() => {
          dispatch(depositMoney(10));
        }}
      >
        Deposit
      </button>
    </div>
  );
};

export default App;
