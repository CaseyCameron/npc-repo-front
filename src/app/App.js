import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Home from '../home/Home';
import NpcAddPage from '../components/controls/NpcAddPage';
import NpcDetailPage from '../components/details/NpcDetailPage';
import NpcEditPage from '../components/controls/NpcEditPage';
import NpcsPage from '../components/display/NpcsPage';

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

