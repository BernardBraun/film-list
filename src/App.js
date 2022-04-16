import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Filme from './pages/Filme';
import Header from './components/Header';


const Routes = () => {
  return(
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
      </Switch>
    </BrowserRouter>
  ) 
}

export default function App() {
  return (
    <div className='app'>
      <Routes />
    </div>
  ); 
}



