import Profile from "./pages/profile/Profile";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from "./pages/login/Login";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" >
            <Login />
          </Route>
          <Route exact path="/Profile" >
            <Profile />
          </Route>
          <Route exact path="/Home" >
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}

export default App;
