import React from 'react';
import styles from './styles';

export const IncomeExpense = (props) => {
  return (
    <div className={styles.incomeExpense}>
      <div className={styles.liContainer + styles.borderRight}>
        Income
        <h3 className={styles.incomePrice}>{props.income}$</h3>
      </div>
      <div className={styles.liContainer}>
        Expense
        <h3 className={styles.expensePrice}>{props.expense}$</h3>
      </div>
    </div>
  )
}