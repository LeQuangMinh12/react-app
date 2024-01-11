import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Chào Minh
        </p>

        <p>Học code react được rồi đó</p>
        <p>Tiêp theo sẽ đẩy code lên Github nhé.</p>
        <p>Thay đổi file này và đẩy code lên git</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
