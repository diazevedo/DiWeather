import React from 'react';

import cloud from '~/assets/images/cloud-background.png';
import CardIcon from '~/components/CardIcon';

import * as C from './styles';

const CardForecast = ({
  day,
  condition,
  degreesAverage,
  degreesMin,
  degreesMax,
}) => {
  // console.tron.log({ day });

  return (
    <C.Container dayColor={day}>
      <C.ImageBackground source={cloud} />
      <C.RegularText>{day}</C.RegularText>

      <CardIcon condition={condition} />

      <C.AverageDegree>{degreesAverage}°</C.AverageDegree>
      <C.DegreesContainer>
        <C.RegularText isMin>{degreesMin}°</C.RegularText>
        <C.RegularText>{degreesMax}°</C.RegularText>
      </C.DegreesContainer>
    </C.Container>
  );
};

export default CardForecast;
