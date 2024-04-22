import logo from "./logo.svg";
import "./App.css";
import Greet from "./Greet";
import Welcome from "./Welcome";
import Stylesheet from "./Stylesheet";
import Inline from "./Inline";
import "./appStyles.css";
import style from "./appStyles.module.css";
function App() {
  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={style.success}>Success</h1>
      <Inline />
      {/*
      <Stylesheet primary={true} />
      <Welcome />
      <Greet /> */}
    </div>
  );
}

export default App;
