import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import styled from 'styled-components';

const Heading1 = styled.h1`
  background: -webkit-linear-gradient(#FF5F6D, #FFC371);
  font-size: 3em;
  margin: 0;
  text-align: center;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  @media screen and (min-width: 768px) {
    font-size: 5em;
    margin: 0.5em 0;
  }
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <Heading1>5 Day Forecast</Heading1  >
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
