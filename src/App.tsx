import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import ItemDetail from './ItemDetails';
import NotFOund from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/create" exact>
            <Create />
          </Route>
          <Route path="/items/:id" exact>
            <ItemDetail />
          </Route>
          <Route path="*">
            <NotFOund />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
