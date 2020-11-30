import React from 'react';
import styles from './styles';
export const TransactionHistory = (props) => {
  return (
    props.transactions.length > 0
      &&
        <>
          <p className={styles.transactionHistoryHeading}>Transaction History</p>
          {
            props.transactions.map((transaction)=>(
              <div className={styles.mainContainer}>
                <div className={styles.designGreen}>
                  <div className={styles.transCenter}>
                    <span
                      className={styles.cursorPointerX}
                      onClick={()=>props.handleDeleteTransaction(transaction.id)}
                    > X </span>
                    <div className={styles.infoContainer}>
                      <p className={styles.marginP}>{transaction.description}</p>
                      <p className={styles.marginP}>{transaction.amount}$</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </>

  )
}