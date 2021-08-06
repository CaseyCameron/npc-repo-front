import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Home from '../home/Home';
import NpcAddPage from '../npc-add/NpcAddPage';
import NpcDetailPage from '../npc/NpcDetailPage';
import NpcEditPage from '../npc-edit/NpcEditPage';
import NpcsPage from '../npcs/NpcsPage';

import './App.css';

export default function App() {
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

