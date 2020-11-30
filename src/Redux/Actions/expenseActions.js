import {
  ADD_EXPENSE,
  DELETE_EXPENSE
} from "../Constants";

const addExpense = (data) => {
  return (dispatch)=>{
    dispatch({
      type: ADD_EXPENSE,
      payload: data
    });
  }
}

const deleteExpense = (data) => {
  return (dispatch)=>{
    dispatch({
      type: DELETE_EXPENSE,
      payload: data
    });
  }
}


export {
  addExpense,
  deleteExpense
};