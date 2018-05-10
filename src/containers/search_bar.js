import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather, getUnit, clear } from '../actions/index';
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
  padding: 1em;
  width: 100%;
  :focus {
    outline: 0;
  }
  @media screen and (min-width: 768px) {
    margin: 0 1em 0 0;
  }
`;

const Label = styled.label`
  display: block;
  padding-bottom: 5px;
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
    font-family: 'Nunito', Arial;
    font-size: 1em;
    margin: 0 0 0 1em;
    span {  
      background-color: #affbfe;
      border: 6px solid #affbfe;
      border-radius: 50%;
      cursor: pointer;
      display: inline-block;
      height: 24px;
      margin: 0 2px 0 0;
      vertical-align: middle;
      width: 24px;
    }
  }
`;

const Button = styled.button`
  background: #E76C67;
  border: 2px solid #E76C67;
  color: #ffe2e1;
  display: inline-block;
  font-family: 'Nunito', Arial;
  font-size: 1.1em;
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

const WrapperRadio = styled.div`
  display: block;
  margin-top: 10px;
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

    this.props.actions.clear();
    this.props.actions.getUnit(this.state.unit);
    this.props.actions.fetchWeather(this.state.term, this.state.unit);

    this.setState({ 
      term: '',
      unit: this.state.unit
    });
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
            <label for="search">Enter City</label>
          </div>
          <Button type="submit">Get Forecast</Button>
          <WrapperRadio>
            <Label htmlFor="units">Results in:</Label>
            <Radio
              type="radio"
              value="imperial"
              id="imperial"
              name="units"
              checked={'imperial' === this.state.unit}
              onChange={this.onUnitChange}
            />
            <label htmlFor="imperial"><span></span> &deg; F</label>
            <Radio
              type="radio"
              value={"metric"}
              id="metric"
              name="units"
              checked={'metric' === this.state.unit}
              onChange={this.onUnitChange}
            />
            <label htmlFor="metric"><span></span> &deg; C</label>
          </WrapperRadio>

        </Form>

        <Span id="errorSpan"></Span>
      </section>
    );
  }
}

function mapStateToProps({ weather, unit }) {
  return { weather, unit };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      fetchWeather: bindActionCreators(fetchWeather, dispatch),
      getUnit: bindActionCreators(getUnit, dispatch),
      clear: bindActionCreators(clear, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
