import React from 'react';
import { View } from 'react-native';

import storms from '~/assets/images/storms.png';
import sunny from '~/assets/images/sunny.png';
import cloudy from '~/assets/images/rainny.png';
import windy from '~/assets/images/windy.png';

import * as C from './styles';

const CardIcon = ({ condition }) => {
  if (condition === 'storms') {
    return <C.Image source={storms} />;
  }

  if (condition === 'sunny') {
    return <C.Image source={sunny} />;
  }

  if (condition === 'cloudy') {
    return <C.Image source={cloudy} />;
  }

  if (condition === 'windy') {
    return <C.Image source={windy} />;
  }
};

export default CardIcon;
