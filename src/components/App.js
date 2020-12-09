import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/admin' />
          <Route path='/admin/home' />
          <Route exact path='/admin/adherents' />
          <Route path='/admin/adherents/:id' />
          <Route path='/admin/adherents/creation' />
          <Route exact path='/admin/articles' />
          <Route exact path='/admin/articles/:id' />
          <Route path='/admin/articles/creation' />
          <Route exact path='/admin/garden' />
          <Route path='/admin/garden/:id' />
          <Route path='/admin/garden/creation' />
          <Route path='/admin/calendar' />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
