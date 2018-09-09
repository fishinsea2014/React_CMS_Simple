import React from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import Container from './container'
import Login from './pages/login'

const routes = (
  <Router  >
    <div>
      <Route path="/" component={Container} />
      <Route path="/login" component={Login} />
      <Redirect from='*' to='/login' />
    </div>
  </Router>
)

export default routes;
