
import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Index from './pages/index'
import Login from './pages/login'

const routes = (
  <Router  >
    <div>
      <Route path="/index" component={Index} />
      <Route path="/login" component={Login} />
      <Route exact path="/" render={()=>{
        if (localStorage.getItem('name')){
          return <Redirect to="index"></Redirect>
        }else{
          return <Redirect to="/login"></Redirect>
        }
      }}></Route>
      {/* <Redirect from='*' to='/login' /> */}
    </div>
  </Router>
)

export default routes;


