import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import momentTimezone from 'moment-timezone';
import tzlookup from 'tz-lookup';
import styled from 'styled-components';
import shortid from 'shortid';

import { fetchWeather } from '../actions/index';
import Chart from '../components/Chart';
import Radio from '../components/Radio';

const WeatherContainer = styled.section`
  background: ${({ danger }) => (danger ? '#f8d7da' : '#fff')};
  border-left: ${({ danger }) => (danger ? '5px solid salmon' : '')};
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
    box-shadow: ${({ danger }) => (danger ? 'none' : '0 4px 6px 0 hsla(0, 0%, 0%, 0.2)')};
    max-width: 768px;
    margin: 1em auto;
    svg {
      display: block;
    }
  }
`;

const WeatherGridItem = styled.div`
  grid-column: ${({ full }) => (full ? 'span 4 / auto' : 'span 1 / auto')};
  text-align: ${({ left }) => (left ? 'left' : 'center')};
`;

export class WeatherList extends Component {
  constructor(props) {
    super(props);

    this.renderWeather = this.renderWeather.bind(this);
    this.onUnitChange = this.onUnitChange.bind(this);
  }

  onUnitChange(event) {
    const { actions, term } = this.props;
    actions.fetchWeather(term, event.target.value);
  }

  renderWeather(cityData) {
    const { unit } = this.props;

    // Data comes in 3 hour intervals
    // We are fetching 8 lots of data
    // 24hrs / 3 hours = 8
    const count = 8;

    const { name } = cityData.city;
    const temps = cityData.list.slice(0, count).map(({ main }) => Math.round(main.temp));
    const descriptions = cityData.list.slice(0, count).map(({ weather }) => weather[0].main);
    const ids = cityData.list.slice(0, count).map(({ weather }) => weather[0].id);

    // Get local timezone for city
    const { lat, lon } = cityData.city.coord;
    const timezone = tzlookup(lat, lon);

    // Get UTC times from response data
    /* eslint-disable camelcase */
    const utcTimes = cityData.list.slice(0, count).map(({ dt_txt }) => dt_txt);
    /* eslint-enable camelcase */

    // Local timezone conversion for each returned UTC time
    const localTimes = [];
    for (let i = 0; i < utcTimes.length; i += 1) {
      const localTime = momentTimezone.utc(utcTimes[i]).tz(timezone).format('ha z');
      localTimes.push(localTime);
    }

    // Create a brand new array with only what we need
    // from the API
    const weatherInfo = [];
    for (let i = 0; i < count; i += 1) {
      weatherInfo.push({
        id: ids[i],
        desc: descriptions[i],
        localTime: localTimes[i],
        temp: temps[i],
      });
    }

    return (
      <WeatherContainer key={name}>
        <WeatherGridItem full left>
          <Radio
            value="F"
            id="F"
            checked={unit === 'F'}
            onChange={this.onUnitChange}
          />
          <Radio
            value="C"
            id="C"
            checked={unit === 'C'}
            onChange={this.onUnitChange}
          />
        </WeatherGridItem>
        <WeatherGridItem full>
          <h2>
            {name}
          </h2>

          <Chart
            temps={temps}
            color="salmon"
          />
        </WeatherGridItem>

        {
          weatherInfo.map((info, i) => (
            <WeatherGridItem key={shortid.generate()}>
              <span className="item">
                {info.localTime}
              </span>
              <span className="item">
                {info.temp}
                {unit}
              </span>
              <span className="item">
                <i className={'wi wi-owm-' + info.id} />
              </span>
              <span className="item">
                {info.desc}
              </span>
            </WeatherGridItem>
          ))
        }
      </WeatherContainer>
    );
  }

  render() {
    const { hasErrored, weather } = this.props;
    return (
      <div>
        {
          hasErrored === true ? (
            <WeatherContainer danger>
              <WeatherGridItem full>
                <p>
                  Sorry, cannot fetch weather :(
                </p>
              </WeatherGridItem>
            </WeatherContainer>
          ) : weather.map(this.renderWeather)
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hasErrored: state.hasErrored,
    term: state.term,
    unit: state.unit,
    weather: state.weather,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      fetchWeather: bindActionCreators(fetchWeather, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
