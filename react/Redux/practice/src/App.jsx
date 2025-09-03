
import './App.css';
import { store } from './app/store'
import { Provider } from 'react-redux';
import AddData from './components/AddData';
import ShowData from './components/ShowData';

function App() {

  return (
    <Provider store={store}>
       <AddData/>
       <ShowData/>   
    </Provider>
  )
}

export default App
