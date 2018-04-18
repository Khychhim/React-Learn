import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-grid-system';
import { Link } from 'react-router-dom'

class Branding extends React.Component{
  render() {
    return (
      <div >
        <Link to="/">
          <img className="branding" src="/images/Branding.svg"/>
        </Link>

      </div>
    );
  }
}

export default Branding;
