import React from 'react'
import { Icon, Image, Menu } from 'semantic-ui-react';
import './Subscription.scss';


export default function Subscription() {
    
    let rightElement = null;
    const { broadcasting, amountNewVideos } = props;
    if(broadcasting) {
        rightElement = <Icon name='signal'/>;
    } else if (amountNewVideos) {
        rightElement = <span className='new-videos-count'>{amountNewVideos}</span>
    }



    return (
        <Menu.item>

        </Menu.item>
    )
}
