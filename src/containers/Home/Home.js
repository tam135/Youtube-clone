import React, { Component } from 'react'
import "./Home.scss";

import HomeContent from './HomeContent/HomeContent'
import SideBar from '../Sidebar/SideBar';



export default class Home extends Component {
    render() {
        return (
          <>
            <SideBar/>
            <HomeContent/>
          </>
        );
    }
}
