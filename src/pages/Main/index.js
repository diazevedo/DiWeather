import React from 'react';

import DaysButtons from '~/parts/DaysButton';
import WeatherDetails from '~/parts/WeatherDetails';
import NextDays from '~/parts/NextDays';
import * as C from './styles';

const Main = () => {
  return (
    <C.Container>
      <DaysButtons />
      <WeatherDetails />
      <NextDays />
    </C.Container>
  );
};

export default Main;
