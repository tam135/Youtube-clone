import React, { Component } from 'react'
import Home from './containers/Home/Home';
import Layout from './components/Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import Watch from './containers/Watch/Watch';
export default class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/watch' component={Watch}/>
          <Route exact path='/' component={Home}/>
        </Switch>
      </Layout>

    )
  }
}
