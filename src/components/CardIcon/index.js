import React from 'react';

import storms from '~/assets/images/storms.png';
import sunny from '~/assets/images/sunny.png';
import cloudy from '~/assets/images/rainny.png';
import windy from '~/assets/images/windy.png';

import * as C from './styles';

/** Range of possible codes returned from the API */

const STORMS_START = 200;
const STORMS_END = 299;

const DRIZZLE_START = 300;
const DRIZZLE_END = 399;

const RAIN_START = 500;
const RAIN_END = 599;

const SNOW_START = 600;
const SNOW_END = 699;

const ATMOSPHERE_START = 700;
const ATMOSPHERE_END = 799;

const CLEAR = 800;
const CLOUDS = 801;

const CardIcon = ({ conditionCode }) => {
  if (conditionCode <= STORMS_START || conditionCode <= RAIN_START) {
    return <C.Image source={storms} />;
  }

  if (conditionCode <= ATMOSPHERE_START) {
    return <C.Image source={windy} />;
  }

  if (conditionCode <= CLEAR) {
    return <C.Image source={sunny} />;
  }

  if (conditionCode <= CLOUDS) {
    return <C.Image source={cloudy} />;
  }

  return <C.Image source={sunny} />;
};

export default CardIcon;
