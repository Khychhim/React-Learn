import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-grid-system';
import CallToAction from './blocks/Call To Action';

class SectionC extends React.Component{
  render() {
    return (
      <section className="section-c">
        <Container>
          <Row>
            <CallToAction title="Developer Bot for Slack" subtitle="One article to one random person in your Slack group. Once a day"/>
          </Row>
        </Container>
      </section>
    );
  }
}
export default SectionC;
