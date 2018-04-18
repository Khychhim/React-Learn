import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-grid-system';

class Title extends React.Component{
  render() {
    return (
      <div>
        <h1 className="title">{this.props.title}</h1>
      </div>
    );
  }
}
export default Title;
