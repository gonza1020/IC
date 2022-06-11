import logo from "./logo.svg";
import "./App.css";

//this shouldnt deploy
//this shouldnt deploy from develop
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Profe usted tiene que ponerme una nota mayor o igual a: </p>

        <p data-testid = 'exam'>
          9
        </p>
        <a
          className="App-link"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="learn-link"
        >
          Entrar a Facebook
        </a>
        <p>Holaa</p>
      </header>
    </div>
  );
}

export default App;
