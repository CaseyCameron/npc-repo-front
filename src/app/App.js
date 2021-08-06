import { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Home from '../home/Home';
import NpcAddPage from '../npc-add/NpcAddPage';
import NpcDetailPage from '../npc/NpcDetailPage';
import NpcEditPage from '../npc-edit/NpcEditPage';
import NpcsPage from '../npcs/NpcsPage';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/npcs" component={NpcsPage} />
            <Route exact path="/npcs/add" component={NpcAddPage} />
            <Route exact path="/npcs/:id" component={NpcDetailPage} />
            <Route path="/npcs/:id/edit" component={NpcEditPage} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }

}

export default App;