import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import styled from 'styled-components';
import 'weathericons/css/weather-icons.min.css';

const Header = styled.header`
  background: #67e2e7;
  padding: 2em;
`;

const Heading1 = styled.h1`
  color: #eafeff;
  font-family: 'Pacifico', Arial;
  font-size: 2em;
  font-weight: 400;
  margin: 0;
  @media screen and (min-width: 415px) {
    font-size: 4em;
    text-align: center;
  }
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Heading1>
            <i className="wi wi-day-sunny"></i>
            Weather Forecast
          </Heading1>
          <SearchBar />
        </Header>
        <WeatherList />
      </div>
    );
  }
}
