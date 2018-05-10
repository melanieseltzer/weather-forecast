import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import styled from 'styled-components';
import 'weathericons/css/weather-icons.min.css';

const Span = styled.span`
  color: salmon;
  display: block;
  margin: 5px auto;
  padding-left: 1em;
  text-align: left;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
`;

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
  text-align: center;
  .wi {
    color: #fbea7e;
    display: block;
    margin: 10px;
    -webkit-animation: rotation 15s infinite linear;
  }
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
        <Span id="error"></Span>
        <WeatherList />
      </div>
    );
  }
}
