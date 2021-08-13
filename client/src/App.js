import React from 'react'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Dashboard from './components/Dashboard.jsx'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Signup} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
