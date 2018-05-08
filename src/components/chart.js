import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines 
        data={props.temps}
        margin={10}>
        <SparklinesLine 
          color={props.color} />
        <SparklinesSpots 
          size={3}
          style={{ stroke: "orange", strokeWidth: 1, fill: "orange" }} />
      </Sparklines>
    </div>
  );
}
