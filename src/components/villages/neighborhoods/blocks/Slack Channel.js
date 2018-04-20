import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-grid-system';
import UserMessage from './houses/UserMessage';
import ChatBoxMessage from './houses/Chat Box Message';

class SlackChannel extends React.Component{
  render() {

    const messages = this.props.messages;
    return (
      <Col lg={12}>
        <img className="slack-channel" src="./images/SlackChannel.svg"/>
        {
          messages ?
          (
              <div>
              <UserMessage/>
              <ChatBoxMessage/>
            </div>
          ) :
          (
            <div></div>
          )
          
        }

      </Col>
    );
  }
}
export default SlackChannel;
