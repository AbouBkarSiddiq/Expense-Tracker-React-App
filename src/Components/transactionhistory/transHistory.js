import React from 'react';
import styles from './styles';
export const TransactionHistory = () => {
    return( 
        <div>
            <div>
                <p className={styles.transactionHistoryHeading}>Transaction History</p>
                <div className={styles.designGreen}>
                    <div className={styles.transCenter}>
                        <span className={styles.cursorPointerX}> X </span>
                        <p className={styles.marginP}></p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


