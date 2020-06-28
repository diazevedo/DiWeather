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
  onPress,
}) => {
  return (
    <C.TouchableView onPress={() => onPress()}>
      <C.Container dayColor={day}>
        <C.ImageBackground source={cloud} />
        <C.RegularText>{day}</C.RegularText>

        <C.IconWrapper>
          <CardIcon condition={condition} />
        </C.IconWrapper>

        <C.AverageDegree>{degreesAverage}°</C.AverageDegree>
        <C.DegreesContainer>
          <C.RegularText isMin>{degreesMin}°</C.RegularText>
          <C.RegularText>{degreesMax}°</C.RegularText>
        </C.DegreesContainer>
      </C.Container>
    </C.TouchableView>
  );
};

export default CardForecast;
