import logo from './logo.svg';
import './App.css';

function App() {

  function check() {

    switch (document.getElementById('answer').value.toUpperCase()) {
      case "10":
        alert("You did it! Continue your journey at the middle school cafeteria...")
        break;
    
      case "ADA LOVELACE":
        alert("Ding ding ding! You can find the next clue at a Spanish teacher's door.")
        break;

      case "123":
        alert("Woohoo! One more puzzle remains: you can find it at the vending machine")
        break;
      default:
        alert('WRONG! Try again...');
        break;
    }

    if(document.getElementById('answer').value == "100") {
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      <meta name="viewport" content="width=device-width, user-scalable=no" />
        <p>
          <code>What's your answer? (⊙_⊙)</code>
        </p>

        <div>
          <input type="text" id='answer' className='text'></input>
          <button onClick={check} className="button">Try it!</button>
        </div>
      </header>
    </div>
  );
}

export default App;
