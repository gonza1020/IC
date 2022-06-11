import logo from "./logo.svg";
import "./App.css";

//this shouldnt deploy
//this shouldnt deploy from develop
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Profe usted tiene aprobarme con una nota de: </p>
        <p data-testid="exam">7</p>
        <a
          className="App-link"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="learn-link"
        >
          Entrar a Facebook
        </a>
      </header>
    </div>
  );
}

export default App;
