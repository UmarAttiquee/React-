import './App.css';
import AddTodo from './component/AddTodo';
import ShowTodo from './component/ShowTodo';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
      <h1>Redux</h1>
      <AddTodo />
      <ShowTodo />
    </Provider>
  );
}

export default App;
