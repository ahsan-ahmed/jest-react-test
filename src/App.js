import logo from './logo.svg';
import './App.css';
import Link from './components/link/Link.react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link page="http://www.facebook.com">Facebook</Link>
      </header>
    </div>
  );
}

export default App;
