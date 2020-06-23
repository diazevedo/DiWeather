import React from 'react';

import DaysButtons from '~/parts/DaysButton';
import WeatherDetails from '~/parts/WeatherDetails';
import * as C from './styles';

const Main = () => {
  return (
    <C.Container>
      <DaysButtons />
      <WeatherDetails />
    </C.Container>
  );
};

export default Main;
