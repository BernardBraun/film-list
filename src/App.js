import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Filme from './pages/Filme';
import Header from './components/Header';
import Erro from './pages/Erro'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Routes = () => {
  return(
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
        <Route exact path="/favoritos" component={Favoritos} />
        <Route path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  ) 
}

export default function App() {
  return (
    <div className='app'>
      <Routes />
      <ToastContainer autoClose={3000} />
    </div>
  ); 
}


