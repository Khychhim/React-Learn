import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-grid-system';
import UserMessage from './houses/UserMessage';
import ChatBoxMessage from './houses/Chat Box Message';

class SlackChannel extends React.Component{
  render() {
    return (
      <Col lg={12}>
        <img className="slack-channel" src="./images/SlackChannel.svg"/>
        <UserMessage/>
        <ChatBoxMessage/>
      </Col>
    );
  }
}
export default SlackChannel;
