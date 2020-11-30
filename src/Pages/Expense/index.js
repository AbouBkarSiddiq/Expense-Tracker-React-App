import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Header } from '../../Components/header/head';
import { CurrentBalance } from '../../Components/currentBalance/currentbalance';
import { IncomeExpense } from '../../Components/income&expense/IncomeExpense';
import { TransactionHistory } from '../../Components/transactionhistory/transHistory';
import { AddNewTransactions } from '../../Components/addnewtrans/addNewTrans';
import {
  addExpense,
  deleteExpense
} from "../../Redux/Actions/expenseActions";

const ExpensePage = (props) => {

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const handleAddTransaction = () => {
    if(amount != 0) {
      const date = new Date();
      const timestamp = `${date.getUTCDate()}:${date.getUTCMonth()}:${date.getUTCFullYear()}:${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}:${date.getUTCMilliseconds()}}`;
      const data = {
        id: timestamp,
        description,
        amount: parseInt(amount)
      };
      props.addExpense(data);
      setDescription("");
      setAmount(0);
    }
  }

  const handleDeleteTransaction = (id) => {
    console.log({id})
    props.deleteExpense({id});
  }

  return (
    <div>
      <Header />
      <div>
        <CurrentBalance
          currentBalance={props.income+props.expense}
        />
      </div>
      <div>
        <IncomeExpense
          income={props.income}
          expense={props.expense}
        />
      </div>
      <div>
        <TransactionHistory
          transactions={props.transactions}
          handleDeleteTransaction={handleDeleteTransaction}
        />
      </div>
      <div>
        <AddNewTransactions
          description={description}
          onDescriptionChange={(e)=>setDescription(e.target.value)}
          amount={amount}
          onAmountChange={(e)=>setAmount(e.target.value)}
          onAddTransaction={handleAddTransaction}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    transactions: state.expenseReducer.transactions,
    income: state.expenseReducer.income,
    expense: state.expenseReducer.expense
  }
}

export default connect(
  mapStateToProps,
  {
    addExpense,
    deleteExpense
  }
)(ExpensePage);