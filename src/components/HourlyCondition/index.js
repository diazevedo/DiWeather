import React from 'react';

import SmallIcon from '~/components/SmallIcon';
import * as C from './styles';

const HourlyCondition = ({ dayForecast }) => {
  return (
    <C.Container>
      {dayForecast.map((hour, i) => (
        <C.TouchableHour key={i}>
          <C.ViewTouchableHour>
            <C.Text>{new Date(hour.fullDate).getHours()}:00</C.Text>

            <C.IconWrapper>
              <SmallIcon conditionCode={hour.conditionCode} />
            </C.IconWrapper>

            <C.DegreeHourText>{hour.temp}°</C.DegreeHourText>
          </C.ViewTouchableHour>
        </C.TouchableHour>
      ))}
    </C.Container>
  );
};

export default HourlyCondition;
