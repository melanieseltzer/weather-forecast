import _ from 'lodash';
import React from 'react';

import {
  Sparkline,
  LineSeries,
  HorizontalReferenceLine,
  BandLine,
  PatternLines,
  PointSeries
} from '@data-ui/sparkline';
import { allColors } from '@data-ui/theme';

export default (props) => {
  return (
    <div>
      <Sparkline
        ariaLabel="24 Hour Weather Forecast"
        width={320}
        height={100}
        margin={{ top: 70, right: 50, bottom: 70, left: 50}}
        data={props.temps}
      >
        <BandLine
          band="innerquartiles"
          fill="url(#unique_pattern_id)"
        />
        <LineSeries
          showArea={false}
          stroke={props.color}
        />
        <PointSeries
          points={['all']}
          fill={allColors.grape[1]}
          size={5}
          stroke="#fff"
        />
      </Sparkline>
    </div>
  );
}
