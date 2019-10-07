import React, { useState } from 'react'
import Login from './Login'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom'
import { 
  Dashboard,
  Categories,
  Clients,
  Products,
  Users
} from '../views'
import { Menu } from './common'

export default function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path="/"> 
          <Dashboard
            Link={Link}/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/productos">
          <Menu 
            Link={Link}/>
          <Products />
        </Route>
        <Route path="/categorias">
          <Menu 
            Link={Link}/>
          <Categories />
        </Route>
        <Route path="/clientes">
          <Menu 
            Link={Link}/>
          <Clients />
        </Route>
        <Route path="/usuarios">
          <Menu 
            Link={Link}/>
          <Users />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}
