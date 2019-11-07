import React, { Component } from 'react'
import './VideoInfoBox.scss';
import {Image, Button} from 'semantic-ui-react';
import Linkify from 'react-linkify';
import { getPublishedAtDateString } from "../../services/date/date-format";
import {getShortNumberString} from '../../services/number/number-format'
export default class VideoInfoBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: true
        }
    }
    
    getDescriptionParagraphs = () => {
        const videoDescription = this.props.video.snippet ? this.props.video.snippet.description : null;
        if(!videoDescription) {
            return null
        }
         return videoDescription.split("\n").map((paragraph, index) => (
           <p key={index}>
             <Linkify>{paragraph}</Linkify>
           </p>
         ));
    }

    getConfig = () => {
        let descriptionTextClass = 'collapsed';
        let buttonTitle = 'Show More';
        if (!this.state.collapsed) {
        descriptionTextClass = 'expanded';
        buttonTitle = 'Show Less';
        }
        return {
        descriptionTextClass,
        buttonTitle
        };
    }

    getSubscriberButtonText() {
        const {channel} = this.props;
        const parsedSubscriberCount = Number(channel.statistics.subscriberCount);
        const subscriberCount = getShortNumberString(parsedSubscriberCount);
        return `Subscribe ${subscriberCount}`;
    }

    onToggleCollapse = () => {
        this.setState((poop) => {
            return {
                collapsed: !poop.collapsed
            }
        })
    }

    render() {
        if (!this.props.video) {
            return <div/>
        }
        
        const descriptionParagraphs = this.getDescriptionParagraphs();
        const { descriptionTextClass, buttonTitle } = this.getConfig()
        const publishedAtString = getPublishedAtDateString(
          this.props.video.snippet.publishedAt
        );
        const { channel } = this.props;
        const buttonText = this.getSubscriberButtonText();
        const channelThumbnail = channel.snippet.thumbnails.medium.url;
        const channelTitle = channel.snippet.title;

        return (
          <div className="video-info-box">
            <Image className="channel-image" src={channelThumbnail} circular />
            <div className="video-info">
              <div className="channel-name">{channelTitle}</div>
              <div className="video-publication-date">{publishedAtString}</div>
            </div>
            <Button color="youtube">{buttonText}</Button>
            <div className="video-description">
              <div className={descriptionTextClass}>
                {descriptionParagraphs}
              </div>
              <Button compact onClick={this.onToggleCollapseButtonClick}>
                {buttonTitle}
              </Button>
            </div>
          </div>
        );
    }
}
