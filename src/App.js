import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PracticeLogic from "./pages/practice_logic";
import Puzzles from "./pages/puzzles";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/practice-logic" component={PracticeLogic} />
          <Route exact path="/puzzles" component={Puzzles} />
          <Redirect to="/practice-logic" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
