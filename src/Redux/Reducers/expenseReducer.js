import {
  ADD_EXPENSE,
  DELETE_EXPENSE
} from "../Constants";

const initialState = {
  transactions: [],
  income: 0,
  expense: 0
};

export default (state=initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE: {
      const transaction = action.payload;
      let updatedTrans = state.transactions;
      updatedTrans.push(transaction);
      let updatedIncome = state.income;
      let updatedExpense = state.expense;
      if(transaction.amount > 0) {
        updatedIncome += transaction.amount;
      } else if(transaction.amount < 0) {
        updatedExpense += transaction.amount;
      }
      return {
        ...state,
        transactions: updatedTrans,
        income: updatedIncome,
        expense: updatedExpense
      }
    }

    case DELETE_EXPENSE: {
      let updatedTrans = [];
      let updatedIncome = state.income;
      let updatedExpense = state.expense;
      state.transactions.forEach((transaction) => {
        if(transaction.id!=action.payload.id) {
          updatedTrans.push(transaction);
        } else {
          if(transaction.amount > 0) {
            updatedIncome -= transaction.amount;
          } else if(transaction.amount < 0) {
            updatedExpense -= transaction.amount;
          }
        }
      });
      // let updatedTrans = state.transactions.filter((transaction)=>transaction.id!=action.payload.id);
      return {
        ...state,
        transactions: updatedTrans,
        income: updatedIncome,
        expense: updatedExpense
      }
    }
  
    default: {
      return state;
    }
  }
}