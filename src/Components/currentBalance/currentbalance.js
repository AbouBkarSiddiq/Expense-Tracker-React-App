import React from 'react';
import styles from './styles';

export const CurrentBalance = (props) => {
    return(
        <div className={styles.currentBal}>
            <h3>CURRENT BALANCE</h3>
            <h3>{props.currentBalance}$</h3>
        </div>
    )
    
}
