import React from "react";
import SideBarItem  from "./SideBarItem/SideBarItem";
import SideBarHeader  from "./SideBarHeader/SideBarHeader";
import { Menu, Divider } from "semantic-ui-react";
import "./SideBar.scss";


export default class SideBar extends React.Component {
         render() {
           return (
             <Menu borderless vertical stackable fixed="left" className="side-nav">
               <SideBarItem highlight={true} label="Home" icon="home" />
               <SideBarItem label="Trending" icon="fire" />
               <SideBarItem label="Subscriptions" icon="play circle" />
               <Divider/>
               <SideBarItem label="Library" icon="folder" />
               <SideBarItem label="History" icon="history" />
               <SideBarItem label="Watch later" icon="clock" />
               <SideBarItem label="Liked videos" icon="thumbs up" />
               <Divider/>
               <SideBarHeader title='More from Youtube'/>
               <SideBarItem label="Youtube Premium" icon="youtube play" />
               <SideBarItem label="Movies and Shows" icon="film" />
               <SideBarItem label="Gaming" icon="game" />
               <SideBarItem label="Live" icon="computer" />
               <SideBarItem label="Fashion" icon="shopping cart" />
               <Divider/>
               <SideBarItem label="Settings" icon="setting" />
               <SideBarItem label="Report history" icon="flag" />
               <SideBarItem label="Help" icon="help circle" />
               <SideBarItem label="Send feedback" icon="comment" />
             </Menu>
           );
         }
       }
