import React, { Component } from 'react'
import Header from './containers/Header/Header';
import Sidebar from './containers/Sidebar/SideBar';
import Home from './containers/Home/Home';


export default class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <Sidebar/>
        <Home/>
      </>
    )
  }
}
