
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Responsive.css";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import Home from "./components/Home/Home";
import Nextone from "./components/Nextone/Nextone";
import Nexttwo from "./components/Nextone/Nexttwo";
import Nextthree from "./components/Nextone/Nextthree";
import Nextfour from "./components/Nextone/Nextfour";
import Nextfive from "./components/Nextone/Nextfive";
import Nextsix from "./components/Nextone/Nextsix";
function App() {
  return (
    <Router>
      <ToastProvider>
        <div className="App">
          <Route path="/" exact component={Home} />
         
          <Route path="/Nextone" exact component={Nextone} />
          <Route path="/Nexttwo" exact component={Nexttwo} />
          <Route path="/Nextthree" exact component={Nextthree} />
          <Route path="/Nextfour" exact component={Nextfour} />
          <Route path="/Nextfive" exact component={Nextfive} />
          <Route path="/Nextsix" exact component={Nextsix} />
          {/* <Route path="/crypto-staking-defi-lending-turnkey-solution" exact component={StakingDefi} /> */}
        </div>
      </ToastProvider>
    </Router>
    
  );
}

export default App;
