import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-grid-system';
import Heading from './houses/Heading';
import Divider from './houses/Divider';
import Paragraph from './houses/Paragraph';

class SectionDescription extends React.Component{
  render() {
    return (
      <Col lg={6}>
        <Heading heading={this.props.heading}/>
        <Divider/>
        <Paragraph/>
      </Col>
    );
  }
}
export default SectionDescription;
