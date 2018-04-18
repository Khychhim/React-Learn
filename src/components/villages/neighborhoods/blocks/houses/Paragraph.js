import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-grid-system';

class Paragraph extends React.Component{
  render() {
    return (
      <div>
        <p className="paragraph">
          Some random paragraph thingy.
        </p>
      </div>

    );
  }
}
export default Paragraph;
