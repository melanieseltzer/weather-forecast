import React, { Component } from 'react';
import styled from 'styled-components';

const RadioWrapper = styled.div`
  display: inline-block;
  margin-top: 10px;
`;

const StyledRadio = styled.input`
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
    margin: 0 0.8em 0 0;
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

export default class Radio extends Component {
  render() {
    return (
      <RadioWrapper>
        <StyledRadio
          type="radio"
          id={this.props.id}
          value={this.props.value}
          name="units"
          checked={this.props.checked}
          onChange={this.props.onChange}
        />
        <label htmlFor={this.props.id}><span></span> &deg; {this.props.id}</label>
      </RadioWrapper>
    );
  }
}