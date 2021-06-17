import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          It is <code>Sunny Today</code> Don't gaze at your screen
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Head out for a walk!
        </a>
        <p>
          Life is too short to code! 
          That being said, you are deployed on dev branch
        </p>
      </header>
    </div>
  );
}

export default App;
