import React from 'react';

// import img from '~/assets/images/card-sunny.png';
import img from '~/assets/images/sunny-background.png';
import clouds from '~/assets/images/sun-and-cloud.png';

import * as C from './styles';

const WeatherDetails = () => {
  return (
    <C.Container>
      <C.ContainerImage>
        <C.ImageBackground source={img} />
        <C.Image source={clouds} />
      </C.ContainerImage>
      <C.ContainerConditions>
        <C.Degrees>25°</C.Degrees>
        <C.Condition>Clouds & sun</C.Condition>
        <C.Humidity>Humidity</C.Humidity>
        <C.Humidity>35 °</C.Humidity>
      </C.ContainerConditions>
    </C.Container>
  );
};

export default WeatherDetails;
