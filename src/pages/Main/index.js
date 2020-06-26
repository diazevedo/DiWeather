import React from 'react';
import { View, Text } from 'react-native';

import { useSelector } from 'react-redux';

import useFetch from '~/hooks/useFetch';

import DaysButtons from '~/parts/DaysButton';
import WeatherDetails from '~/parts/WeatherDetails';
import NextDays from '~/parts/NextDays';

import formateForecast from '~/utils/helpers/functions/formateDate.js';

import * as C from './styles';
const date = new Date();

const Main = () => {
  const searchedCity = useSelector((state) => state.searchedCity.city);
  const options = React.useMemo(() => ({ q: searchedCity }), [searchedCity]);

  const [weather, , loading] = useFetch({
    url: 'current',
    options,
  });

  const [forecast, , loadingForecast] = useFetch({
    url: 'daily',
    options,
    callback: React.useCallback((f) => formateForecast(f), []),
  });

  return (
    <C.Container>
      <DaysButtons />

      {Object.keys(weather).length > 0 ? (
        <>
          <WeatherDetails weather={weather.pop()} />
          <NextDays forecast={forecast} />
        </>
      ) : null}
    </C.Container>
  );
};

export default Main;
