import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      chicagoTime: "",
      oxfordTime: ""
    }

    this.startTime = this.startTime.bind(this);
    this.checkTime = this.checkTime.bind(this);
  }

  componentDidMount() {
    this.startTime();
  }

  checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  startTime() {
    const today = new Date();
    const hour = today.getHours();
    const gmtHour = today.getUTCHours();
    let minute = today.getMinutes();
    minute = this.checkTime(minute);

    const oxfordTime = `${gmtHour} : ${minute}`
    const chicagoTime = `${hour} : ${minute}`

    this.setState({ chicagoTime, oxfordTime });
    const time = setTimeout(this.startTime, 60000);
  }

  render() {
    return (
      <div className="header">
        <h1>Zooniboard</h1>
        <div className="header__time">
          <div>
            {this.state.oxfordTime} GMT
          </div>
          <div>
            {this.state.chicagoTime} CST
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
