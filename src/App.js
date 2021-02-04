import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from './components/Portfolio';
import SobreMi from "./components/Sobre-mi";
import "fontawesome-4.7/css/font-awesome.min.css";
import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log(isLoading);
    setIsLoading(true);
    console.log(isLoading);
  });
  return (
    <div>
      <Loader
        className="loader"
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        visible={isLoading}
        timeout={2000}
      />
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/portafolio">
              <Portfolio />
            </Route>
            <Route path="/sobre-mi">
              <SobreMi />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
