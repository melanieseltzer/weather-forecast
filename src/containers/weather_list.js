import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    // Get selected temp unit for display
    const splitUnit = cityData[0].split("units=");
    const unit = splitUnit[1];
    
    // The actual API response
    const response = cityData[1];

    const name = response.city.name;
    const temps = response.list.map(weather => weather.main.temp);
    const humidities = response.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="salmon" units={unit === 'imperial' ? "F" : "C" } /></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
