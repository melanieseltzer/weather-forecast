import React from 'react';
import styled from 'styled-components';
import 'weathericons/css/weather-icons.min.css';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

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
    animation: rotation 15s infinite linear;
  }
  @media screen and (min-width: 415px) {
    font-size: 4em;
    text-align: center;
  }
`;

const App = () => (
  <div>
    <Header>
      <Heading1>
        <i className="wi wi-day-sunny" />
        Weather Forecast
      </Heading1>
      <SearchBar />
    </Header>
    <WeatherList />
  </div>
);

export default App;
