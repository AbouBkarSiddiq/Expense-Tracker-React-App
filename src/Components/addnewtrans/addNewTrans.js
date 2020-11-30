import React from 'react';
import styles from './styles';

export const AddNewTransactions = (props) => {
  return (
    <div>
      <div>
        <h3 className={styles.newTrans}>Add New Transaction</h3>
        <h4 className={styles.desHeading}>Description</h4>
        <br />
        <input
          className={styles.inputDes}
          type="text" name="name"
          value={props.description}
          onChange={props.onDescriptionChange}
          placeholder="Description"
        />
      </div>
      <div>
        <h4 className={styles.totalAmount}>Total Amount</h4>
        <br />
        <input
          className={styles.inputAmo}
          type="text" name="name"
          value={props.amount}
          onChange={props.onAmountChange}
          placeholder="0"
        />
      </div>
      <br />
      <button
        className={styles.addTrans}
        onClick={props.onAddTransaction}
      >
        Add Transaction
      </button>
    </div>
  )
}