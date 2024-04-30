import "./App.css";
import "./Pokecard.css";
import Pokegame from "./Pokegame";

function App() {
  const reLoad = () => {
    window.location.reload();
  };
  return (
    <div className="App">
      <button onClick={reLoad} class="btn">
        <i class="animation"></i>Pokemon Go Card<i class="animation"></i>
      </button>
      <Pokegame />
    </div>
  );
}

export default App;
