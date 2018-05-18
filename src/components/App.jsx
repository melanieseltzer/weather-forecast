import React from 'react';
import styled from 'styled-components';
import 'weathericons/css/weather-icons.min.css';

import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

const Header = styled.header`
  background: #67e2e7;
  padding: 2em;
`;

const H1 = styled.h1`
  color: #eafeff;
  font-family: 'Pacifico', Arial;
  font-size: 2em;
  font-weight: 400;
  margin: 0;
  text-align: center;
  .wi {
    color: #fbea7e;
    display: block;
    font-size: 2em;
    margin: 10px;
    animation: rotation 15s infinite linear;
  }
  @media screen and (min-width: 415px) {
    font-size: 3em;
    text-align: center;
  }
`;

const App = () => (
  <div>
    <Header>
      <H1>
        <i className="wi wi-day-sunny" />
        Weather Forecast
      </H1>
      <SearchBar />
    </Header>
    <WeatherList />
  </div>
);

export default App;
