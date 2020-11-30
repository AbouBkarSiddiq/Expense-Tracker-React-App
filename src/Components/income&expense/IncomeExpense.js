import React from 'react';
import styles from './styles';
export const IncomeExpense = () => {
    return (
        <div className={styles.incomeExpense}>
            <div className={styles.liContainer+styles.borderRight}>
                Income
                <h3 className={styles.incomePrice}>0$</h3>
            </div>
            <div className={styles.liContainer}>
                Expense
                <h3 className={styles.expensePrice}>0$</h3>
            </div>
        </div>
    )
}