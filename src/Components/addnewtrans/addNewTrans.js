import React from 'react';
import styles from './styles';
export const AddNewTransactions = () => {
    return (
        <div>
            <div>
                <h3 className={styles.newTrans}>Add New Transaction</h3>
                <h4 className={styles.desHeading}>Description</h4>
                <br />
                <input className={styles.inputDes} type="text" name="name" placeholder="Description" />
            </div>
            <div>
                <h4 className={styles.totalAmount}>Total Amount</h4>
                <br />
                <input className={styles.inputAmo} type="text" name="name" placeholder="0" />
            </div>
            <br />
            <button className={styles.addTrans}>Add Transaction</button>
        </div>
    )
}