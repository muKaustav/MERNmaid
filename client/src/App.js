  
import React from 'react'
import Login from './components/LoginSignup/Login'
import Signup from './components/LoginSignup/Signup'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import FeatureCard from './components/FeatureCard/FeatureCard.jsx'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        {/* important routes */}
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Signup} />
        {/* component testing route */}
        <Route path='/test' exact component={FeatureCard} />
      </Switch>
    </BrowserRouter>
  )
}

export default App