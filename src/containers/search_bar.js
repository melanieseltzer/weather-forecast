import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import styled from 'styled-components';

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

const Form = styled.form`
  margin: 20px auto 10px auto;
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
`;

const Input = styled.input`
  background: #fff;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-family: 'Open Sans', Arial;
  font-size: 1em;
  margin: 0 0 0.5em 0;
  width: 100%;
  :focus {
    outline: 0;
  }
  @media screen and (min-width: 768px) {
    margin: 0 1em 0 0;
    width: 70%;
  }
`;

const Radio = styled.input`
  display: none;
  :checked {
    + label {
      span {
        background-color: salmon;
      }
    }
  }
  + label {
    color: #595959;
    font-family: 'Open Sans', Arial;
    font-size: 1em;
    margin: 0 20px 0 0;
    span {
      box-shadow: 0 0 0 2px #ddd;
      display: inline-block;
      width: 24px;
      height: 24px;
      margin: 0 5px 0 0;
      vertical-align: middle;
      cursor: pointer;
      border-radius: 50%;
      border: 6px solid #fff;
      background-color: #fff;
    }
  }
`;

const Button = styled.button`
  background: transparent;
  border: 2px solid salmon;
  border-radius: 5px;
  font-family: 'Open Sans', Arial;
  color: salmon;
  display: inline-block;
  font-size: 1em;
  margin: 0;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 27%;
  }
  &:hover {
    background: salmon;
    color: #fff;
    cursor: pointer;
    transition: 0.7s;
  }
`;

const Wrapper = styled.div`
  display: block;
  margin-bottom: 15px;
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      term: '',
      unit: 'imperial'
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onUnitChange = this.onUnitChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ 
      term: event.target.value
    });
  }

  onUnitChange(event) {
    this.setState({
      unit: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term, this.state.unit);
    this.setState({ 
      term: ''
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onFormSubmit}>
          <Wrapper>
            <Radio 
              type="radio" 
              value="imperial"
              id="imperial" 
              checked={'imperial' === this.state.unit}
              onChange={this.onUnitChange}
            />
            <label htmlFor="imperial"><span></span> &deg; F</label>
            <Radio 
              type="radio" 
              value={"metric"}
              id="metric" 
              checked={'metric' === this.state.unit}
              onChange={this.onUnitChange}
            />
            <label htmlFor="metric"><span></span> &deg; C</label>
          </Wrapper>

          <Input
            placeholder="Enter city"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <Button type="submit">Submit</Button>
        </Form>

        <Span id="errorSpan"></Span>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
