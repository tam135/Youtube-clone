import React, { Component } from 'react'
import Subscription from './Subscription/Subscription';
import { Divider } from 'semantic-ui-react';
import SideBarHeader from '../SideBarHeader/SideBarHeader';

export default class Subscriptions extends Component {
    render() {
        return (
          <>
            <SideBarHeader title="Subscriptions" />
            <Subscription label="PewdiePie" broadcasting />
            <Subscription label="5 Min Crafts" amountNewVideos={6} />
            <Subscription label="TechLead" amountNewVideos={2} />
            <Subscription label="Justin Bieber" amountNewVideos={1} />
            <Subscription label="Cat Videos" amountNewVideos={4} />
            <Divider/>
          </>
        );
    }
}
