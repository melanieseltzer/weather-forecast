import React from 'react';
import PropTypes from 'prop-types';
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

const Radio = (props => (
  <RadioWrapper>
    <StyledRadio
      type="radio"
      id={props.id}
      value={props.value}
      name="units"
      checked={props.checked}
      onChange={props.onChange}
    />
    <label htmlFor={props.id}><span /> &deg; {props.id}</label>
  </RadioWrapper>
));

export default Radio;

Radio.defaultProps = {
  id: '',
  value: '',
  checked: false,
  onChange: () => {},
};

Radio.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
