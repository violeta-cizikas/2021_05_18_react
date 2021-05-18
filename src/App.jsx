import "./App.css";
import Header from "./components/header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Upload from "./pages/upload";
import Items from "./pages/items";
import Favorites from "./pages/favorites";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <div className="content">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Upload items={items} setItems={setItems} />
            </Route>
            <Route exact path="/items">
              <Items items={items} setItems={setItems} />
            </Route>
            <Route exact path="/favorites">
              <Favorites items={items} setItems={setItems} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
