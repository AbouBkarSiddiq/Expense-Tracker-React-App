import styles from './appStyles';
import { Header } from './Components/header/head';
import { CurrentBalance } from './Components/currentBalance/currentbalance';
import { IncomeExpense } from './Components/income&expense/IncomeExpense';
import { TransactionHistory } from './Components/transactionhistory/transHistory';
import { AddNewTransactions} from './Components/addnewtrans/addNewTrans';

function App() {

  return (
    <div className={styles.wholeApp}>
      <Header />
      <div>
        <CurrentBalance />
      </div>
      <div>
        <IncomeExpense />
      </div>
      <div>
        <TransactionHistory />
      </div>
      <div>
        <AddNewTransactions />
      </div>
    </div>

  );
}

export default App;
