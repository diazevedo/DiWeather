import React from 'react';

import api from '~/services/api';

import DaysButtons from '~/parts/DaysButton';
import WeatherDetails from '~/parts/WeatherDetails';
import NextDays from '~/parts/NextDays';

import * as C from './styles';

const Main = () => {
  const loadData = async () => {
    try {
      const data = await api.get();
      console.tron.log(data);
    } catch (error) {
      console.tron.log(error);
    }
  };

  React.useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <C.Container>
      <DaysButtons />
      <WeatherDetails />
      <NextDays />
    </C.Container>
  );
};

export default Main;
