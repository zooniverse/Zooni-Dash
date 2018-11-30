import React from 'react';
import PropTypes from 'prop-types';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="weather">
        <h2>Weather</h2>
        <div className="weather__container">
          <div className="weather__today">
            <h3>Today</h3>
          </div>
          <div className="weather__future">

          </div>
        </div>
      </div>
    )
  }
}

export default Weather;
