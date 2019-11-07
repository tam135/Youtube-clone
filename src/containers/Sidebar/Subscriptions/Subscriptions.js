import React from 'react';
import {Subscription} from "./Subscription/Subscription";
import {Divider} from "semantic-ui-react";
import {SideBarHeader} from '../SideBarHeader/SideBarHeader';

export class Subscriptions extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBarHeader title='Subscriptions'/>
        <Subscription label='PewdiePie' broadcasting/>
        <Subscription label='Barack Obama' amountNewVideos={2}/>
        <Subscription label='Cute Cat Videos' amountNewVideos={4}/>
        <Subscription label='How to code' amountNewVideos={6}/>
        <Divider/>
      </React.Fragment>
    );
  }
}