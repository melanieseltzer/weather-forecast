import React, { Component } from 'react';


export default class Table extends Component {
  constructor (props) {
    super(props);
  }
  
  render() {
    return (
      <table>
        <tbody>
          <tr>
            {
              this.props.data.map((info, i) => {
                return <td key={i}>
                  {info.localTime} <br />
                  <i className={`wi wi-owm-${info.id}`}></i> <br />
                  {info.desc} <br />
                  {info.temp}{this.props.unit === 'imperial' ? 'F' : 'C'} <br />
                </td>;
              })
            }
          </tr>
        </tbody>
      </table>
    );
  }
}
