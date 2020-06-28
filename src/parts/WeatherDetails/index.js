import React from 'react';

import { roundDegrees } from '~/utils/helpers/functions/temperature';

import img from '~/assets/images/sunny-background.png';
import clouds from '~/assets/images/sun-and-cloud.png';

import * as C from './styles';

const WeatherDetails = ({ weather }) => {
  const { temp, weather: current, app_temp: feelsLike } = weather;

  return (
    <C.Container>
      <C.ContainerImage>
        <C.ImageBackground source={img} />
        <C.Image source={clouds} />
      </C.ContainerImage>
      <C.ContainerConditions>
        <C.Degrees>{roundDegrees(temp)}°</C.Degrees>
        <C.Condition>{current.description}</C.Condition>

        <C.Humidity>Feels Like</C.Humidity>

        <C.Humidity isLast>{roundDegrees(feelsLike)}°</C.Humidity>
      </C.ContainerConditions>
    </C.Container>
  );
};

export default WeatherDetails;
