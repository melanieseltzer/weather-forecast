import React from 'react';
import { Sparkline, LineSeries, PointSeries } from '@data-ui/sparkline';

export default (props) => {
  return (
    <div>
      <Sparkline
        ariaLabel="24 Hour Weather Forecast"
        className="chart"
        width={668}
        height={200}
        margin={{ top: 70, right: 50, bottom: 70, left: 50}}
        data={props.temps}
      >
        <LineSeries
          showArea={false}
          stroke={props.color}
        />
        <PointSeries
          points={['all']}
          fill={props.color}
          size={5}
          stroke="#fff"
        />
      </Sparkline>
    </div>
  );
}
