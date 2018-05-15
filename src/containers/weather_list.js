import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import momentTimezone from 'moment-timezone';
import tzlookup from 'tz-lookup';
import styled from 'styled-components';

import Chart from '../components/chart';

const WeatherContainer = styled.section`
  background: #fff;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  color: hsl(0, 0%, 13%);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 2em;
  text-align: center;
  svg {
    display: none;
  }
  span.item {
    display: block;
    margin-bottom: 10px;
  }
  i {
    color: salmon;
    font-size: 30px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin: 1em auto;
    svg {
      display: block;
    }
  }
`;

const WeatherGridItem = styled.div`
  grid-column: ${props => props.full ? 'span 4 / auto' : 'span 1 / auto'};
`;

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
        id: ids[i],
        desc: descriptions[i],
        localTime: localTimes[i],
        temps: temps[i]
      });	
    }

    return (
      <WeatherContainer key={name}>
        <WeatherGridItem full>
          <h2>{name}</h2>

          <Chart
            temps={temps}
            color="salmon" />
        </WeatherGridItem>

        {
          weatherInfo.map((info, i) => {
            return <WeatherGridItem key={i}>
              <span className="item">
                {info.localTime}
              </span> 
              <span className="item">
                {info.temps}
                {this.props.unit}
              </span>
              <span className="item">
                <i className={"wi wi-owm-" + info.id}></i>
              </span>
              <span className="item">
                {info.desc}
              </span>
            </WeatherGridItem>
          })
        }
      </WeatherContainer>
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

export default connect(mapStateToProps, null)(WeatherList);
