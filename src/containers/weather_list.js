import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather, getUnit } from '../actions';

import moment from 'moment';
import momentTimezone from 'moment-timezone';
import tzlookup from 'tz-lookup';

import Chart from '../components/chart';
import Table from '../components/table';

class WeatherList extends Component {
  constructor (props) {
    super(props);
    this.renderWeather = this.renderWeather.bind(this);
  }
  renderWeather(cityData) {
    // Data comes in 3 hour intervals
    // We are fetching 8 lots of data
    // 24hrs / 3 hours = 8
    const count = 8;

    const name = cityData.city.name;
    const temps = cityData.list.slice(0, count).map(({ main }) => Math.round(main.temp));
    const descriptions = cityData.list.slice(0, count).map(({ weather }) => weather[0].main);
    const ids = cityData.list.slice(0, count).map(({ weather }) => weather[0].id);

    // Get local timezone for city
    const lat = cityData.city.coord.lat;
    const long = cityData.city.coord.lon;
    const timezone = tzlookup(lat, long);
    
    // Get UTC times from response data
    const utcTimes = cityData.list.slice(0, count).map(({ dt_txt }) => dt_txt);

    // Local timezone conversion for each returned UTC time
    const localTimes = [];
    for (let i = 0; i < utcTimes.length; i++) {
      let localTime = moment.utc(utcTimes[i]).tz(timezone).format('ha z');
      localTimes.push(localTime);
    }

    // Create a brand new array with only what we need
    // from the API
    const weatherInfo = [];
    for (let i = 0; i < count; i++) {
      weatherInfo.push({
        key: i,
        temp: temps[i],
        desc: descriptions[i],
        id: ids[i],
        localTime: localTimes[i]
      });
    }

    return (
      <section key={name}>
        <h2>{name}</h2>
        
        <Chart 
          temps={temps} 
          color="salmon"  />

        <Table 
          data={weatherInfo}
          unit={this.props.unit.selected} />
          
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

function mapStateToProps({ weather, unit }) {
  return { weather, unit };
}

export default connect(mapStateToProps)(WeatherList);
