import styles from './appStyles';
import { Provider } from 'react-redux';
import ExpensePage from "./Pages/Expense";
import store from "./Redux/store";


function App() {

  return (
    <div className={styles.wholeApp}>
      <Provider store={store}>
        <ExpensePage />
      </Provider>
    </div>
  );
}

export default App;
