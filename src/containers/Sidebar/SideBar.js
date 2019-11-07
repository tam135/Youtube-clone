import React from 'react';
import SideBarItem from './SideBarItem/SideBarItem';
import {Menu, Divider} from 'semantic-ui-react';
import './SideBar.scss';
import {SideBarHeader} from './SideBarHeader/SideBarHeader';
import {Subscriptions} from './Subscriptions/Subscriptions';
import {SideBarFooter} from './SideBarFooter/SideBarFooter';

export class SideBar extends React.Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed="left" className="side-nav">
        <SideBarItem path="/" label="Home" icon="home" />
        <SideBarItem path="/feed/trending" label="Trending" icon="fire" />
        <SideBarItem label="Subscriptions" icon="play circle" />
        <Divider />
        <SideBarItem label="Library" icon="folder" />
        <SideBarItem label="History" icon="history" />
        <SideBarItem label="Watch later" icon="clock" />
        <SideBarItem label="Liked videos" icon="thumbs up" />
        <Divider />
        <Subscriptions />
        <SideBarHeader title="More from Youtube" />
        <SideBarItem label="Youtube Premium" icon="youtube" />
        <SideBarItem label="Movies and Shows" icon="film" />
        <SideBarItem label="Gaming" icon="gamepad" />
        <SideBarItem label="Fashion" icon="cart" />
        <Divider />
        <SideBarItem label="Settings" icon="settings" />
        <SideBarItem label="Report history" icon="flag" />
        <SideBarItem label="Help" icon="help circle" />
        <SideBarItem label="Send feedback" icon="comment" />
        <Divider />
        <SideBarFooter />
      </Menu>
    );
  }
}