import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUnit } from '../actions/index';

import Radio from '../components/radio';
import Chart from '../components/chart';

import convert from 'convert-units';

class Table extends Component {
  constructor (props) {
    super(props);

    this.state = {
      unit: this.props.unit
    };

    this.onUnitChange = this.onUnitChange.bind(this);
  }

  onUnitChange(event) {
    this.setState({
      unit: event.target.value
    });
    this.props.actions.getUnit(event.target.value);
    //this.props.actions.convertTemp();
  }
  
  render() {
    return (
      <div>
        <Radio
          value="imperial"
          id="imperial"
          checked={'imperial' === this.props.unit}
          onChange={this.onUnitChange}
        />

        <Radio
          value="metric"
          id="metric"
          checked={'metric' === this.props.unit}
          onChange={this.onUnitChange}
        />

        <h2>{this.props.name}</h2>

        <Chart
          temps={this.props.temps}
          color="salmon" />

        {this.props.localtimes} <br />
        {this.props.ids} <br />
        {this.props.descs} <br />
        {this.props.temps}{this.props.unit}    
      </div>
    );
  }
}

function mapStateToProps({ weather, unit }) {
  return { weather, unit };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUnit: bindActionCreators(getUnit, dispatch),
      // convertTemp: bindActionCreators(convertTemp, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
