import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { clear, fetchWeather, updateUnit } from '../actions/index';
import Radio from '../components/Radio';


const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 1px 1%;
  margin: 20px auto 10px auto;
  width: 100%;
  @media screen and (min-width: 768px) {
    grid-template-columns: 3fr 1fr;
    max-width: 768px;
  }
`;

const Input = styled.input`
  background: #affbfe;
  border: 0;
  border-bottom: 2px solid #E76C67;
  box-sizing: border-box;
  display: inline-block;
  font-family: 'Nunito', Arial;
  font-size: 1.2em;
  height: 70px;
  margin: 0 0 0.5em 0;
  padding: 1.5em 1em 1em 1em;
  width: 100%;
  :focus {
    border: 0;
    outline: thick dotted salmon;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

const Button = styled.button`
  background: #E76C67;
  border: 2px solid #E76C67;
  color: #ffe2e1;
  display: inline-block;
  font-family: 'Nunito', Arial;
  font-size: 1.2em;
  font-weight: 700;
  height: 70px;
  margin: 0;
  padding: 1em;
  width: 100%;
  &:hover {
    background: salmon;
    border-color: salmon;
    color: #fff;
    cursor: pointer;
    transition: 0.7s;
  }
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      unit: 'F',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onUnitChange = this.onUnitChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value,
    });
  }

  onUnitChange(event) {
    this.setState({
      unit: event.target.value,
    });

    this.props.actions.updateUnit(event.target.value);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.actions.clear();
    this.props.actions.fetchWeather(this.state.term, this.state.unit);
  }

  render() {
    return (
      <section>
        <Form onSubmit={this.onFormSubmit}>
          <div className="has-float-label">
            <Input
              type="text"
              id="search"
              placeholder="e.g. Los Angeles"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <label htmlFor="search">Enter City</label>
          </div>
          <Button type="submit">Get Forecast</Button>
          <div>
            <Radio
              value="F"
              id="F"
              checked={this.state.unit === 'F'}
              onChange={this.onUnitChange}
            />
            <Radio
              value="C"
              id="C"
              checked={this.state.unit === 'C'}
              onChange={this.onUnitChange}
            />
          </div>
        </Form>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      clear: bindActionCreators(clear, dispatch),
      updateUnit: bindActionCreators(updateUnit, dispatch),
      fetchWeather: bindActionCreators(fetchWeather, dispatch),
    },
  };
}

export default connect(null, mapDispatchToProps)(SearchBar);