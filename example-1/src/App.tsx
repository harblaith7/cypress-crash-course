import logo from './logo.svg';
import './App.css';
import SideNav from './components/SideNav/SideNav';
import Habit from "./components/Habit/Habit"
import Accomplishment from './components/Accomplishment/Accomplishment';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Rewards from './components/Rewards/Rewards';
import Elements from './components/Elements/Elements';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-container">
          <SideNav />
          <Switch>
            <Route strict exact path="/habits" component={Habit} />
            <Route strict exact path="/accomplishments" component={Accomplishment} />
            {/* <Route strict exact path="/rewards" component={Rewards} /> */}
            <Route strict exact path="/elements" component={Elements} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
