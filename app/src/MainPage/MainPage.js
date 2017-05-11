import React, { Component } from 'react';
import './style.css';
import LeftPanel from './Components/LeftPanel/LeftPanel.js';
import RightPanel from './Components/RightPanel/RightPanel.js';

class MainPage extends Component {
  render() {
    return (
      <div>
        <h2>Hetekivi.com</h2>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <LeftPanel />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <RightPanel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
