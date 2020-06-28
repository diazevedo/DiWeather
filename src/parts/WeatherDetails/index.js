import React from 'react';

import img from '~/assets/images/sunny-background.png';
import clouds from '~/assets/images/sun-and-cloud.png';

import * as C from './styles';

const WeatherDetails = ({ weather }) => {
  const { temp, feels_like, description } = weather;

  return (
    <C.Container>
      <C.ContainerImage>
        <C.ImageBackground source={img} />
        <C.Image source={clouds} />
      </C.ContainerImage>
      <C.ContainerConditions>
        <C.Degrees>{temp}°</C.Degrees>
        <C.Condition>{description}</C.Condition>

        <C.Humidity>Feels Like</C.Humidity>

        <C.Humidity isLast>{feels_like}°</C.Humidity>
      </C.ContainerConditions>
    </C.Container>
  );
};

export default WeatherDetails;
