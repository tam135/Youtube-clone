import React, { Component } from 'react'
import Header from './containers/Header/Header';
import Sidebar from './containers/Sidebar/SideBar';
import Home from './containers/Home/Home';
import Layout from './components/Layout/Layout';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Home/>
      </Layout>

    )
  }
}
