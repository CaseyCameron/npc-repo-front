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
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps} />
                )}
              />

              <Route path="/npcs" exact={true}
                render={routerProps => (
                  <NpcsPage {...routerProps} />
                )}
              />

              <Route path="/npcs/add" exact={true}
                render={routerProps => (
                  <NpcAddPage {...routerProps} />
                )}
              />

              <Route path="/npcs/:id" exact={true}
                render={routerProps => (
                  <NpcDetailPage {...routerProps} />
                )}
              />

              <Route path="/npcs/:id/edit" exact={true}
                render={routerProps => (
                  <NpcEditPage {...routerProps} />
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }

}

export default App;