import React from 'react';

import CardIcon from '~/components/CardIcon';

import HourlyCondition from '~/components/HourlyCondition';

import * as C from './styles';

const Modal = ({ weatherData }) => {
  const { day, condition, temp, temp_min_day, temp_max_day } = weatherData;

  return (
    <C.Container dayColor={day}>
      <C.TodayDegreeContainer>
        <C.Day>{day}</C.Day>

        <C.IconWrapper>
          <CardIcon condition={condition} />
        </C.IconWrapper>

        <C.AverageDegree>{temp}°</C.AverageDegree>
        <C.DegreesContainer>
          <C.RegularText isMin>{temp_min_day}°</C.RegularText>
          <C.RegularText>{temp_max_day}°</C.RegularText>
        </C.DegreesContainer>
      </C.TodayDegreeContainer>
      <HourlyCondition dayForecast={weatherData.forecast.slice(0, 5)} />
    </C.Container>
  );
};

export default Modal;
