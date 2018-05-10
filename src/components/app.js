import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import styled from 'styled-components';
import 'weathericons/css/weather-icons.min.css';

const Header = styled.header`
  background: salmon;
  background: linear-gradient(to bottom, salmon, #FFC371);
  padding: 2em;
`;

const Heading1 = styled.h1`
  color: #fff;
  font-family: 'Pacifico', Open Sans;
  font-size: 2em;
  font-weight: 400;
  margin: 0;
  text-align: center;
  @media screen and (min-width: 415px) {
    font-size: 4em;
  }
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Heading1>
            <i className="wi wi-day-sunny-overcast"></i>
            Weather Forecast
          </Heading1>
        </Header>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
