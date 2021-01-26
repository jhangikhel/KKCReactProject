import logo from './logo.svg';
import './App.css';
import Products from './Products';
import { Provider } from 'react-redux';
import store from './Store/index';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Provider store={store}>
          <Products></Products>
        </Provider>
      </header>
    </div>
  );
}

export default App;
