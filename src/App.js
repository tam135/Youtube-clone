import React, { Component } from 'react'
import Home from './containers/Home/Home';
import Layout from './components/Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import Watch from './containers/Watch/Watch';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import youtubeLibraryLoaded  from "./store/actions/api";


const API_KEY = 'AIzaSyAEjX-1XvfJ0QHLTD1jnpYX70dMUl2tX_E'

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

  componentDidMount() {
    this.loadYoutubeApi();
  }

  // attaching Youtube's JS library script to handle authentication / access personal user data
  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          this.props.youtubeLibraryLoaded();
        });
      });
    };
    document.body.appendChild(script);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({youtubeLibraryLoaded}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
