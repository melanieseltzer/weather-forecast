import React, { Component } from 'react';
import { connect } from 'react-redux';

import moment from 'moment';
import momentTimezone from 'moment-timezone';
import jstz from 'jstz';

import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    // Data comes in 3 hour intervals
    // We are fetching 8 lots of data
    // 24hrs / 3 hours = 8
    const count = 8;

    // Get selected temp unit for display
    const splitUnit = cityData[0].split("units=");
    const unit = splitUnit[1];
    const unitConverted = unit === 'imperial' ? "F" : "C";
    
    // The actual API response
    const response = cityData[1];

    const name = response.city.name;
    const temps = response.list.slice(0, count).map(({ main }) => Math.round(main.temp));
    const descriptions = response.list.slice(0, count).map(({ weather }) => weather[0].main);
    const icons = response.list.slice(0, count).map(({ weather }) => weather[0].icon);

    // Detect user timezone
    const timezone = jstz.determine();
    const userTimezone = timezone.name();
    
    // Get UTC times from data
    const utcTimes = response.list.slice(0, count).map(({ dt_txt }) => dt_txt);

    // Local timezone conversion for each returned UTC time
    const localTimes = [];
    for (let i = 0; i < utcTimes.length; i++) {
      let localTime = moment.utc(utcTimes[i]).tz(userTimezone).format('ha z');
      localTimes.push(localTime);
    }

    // Create a brand new array with only what we need
    // from the API
    const weatherInfo = [];
    for (let i = 0; i < count; i++) {
      weatherInfo.push({
        temp: temps[i],
        desc: descriptions[i],
        icon: icons[i],
        localTime: localTimes[i]
      });
    }
    
    console.log(weatherInfo);

    return (
      <section key={name}>
        <h2>{name}</h2>

        <Chart 
          temps={temps} 
          color="salmon"  />

        {/* <div>{newArray.map(temp => newArray.temp + unitConverted + ' ')}</div> */}
      </section>
    );
  }
  render() {
    return (
      <div>
        {this.props.weather.map(this.renderWeather)}
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
