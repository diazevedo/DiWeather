import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import useFetch from '~/hooks/useFetch';

import DaysButtons from '~/parts/DaysButton';
import WeatherDetails from '~/parts/WeatherDetails';
import NextDays from '~/parts/NextDays';

import formateForecast from '~/utils/helpers/functions/formateDate.js';

import * as C from './styles';

const Main = ({ navigation }) => {
  const searchedCity = useSelector((state) => state.searchedCity.city);

  const [daySelected, setDaySelected] = React.useState(0);

  const [forecast, , loadingForecast] = useFetch({
    url: 'forecast',
    options: React.useMemo(() => ({ q: searchedCity }), [searchedCity]),
    callback: React.useCallback((f) => formateForecast(f), []),
  });

  const handleSelectDay = (IndexButtonSelected) => {
    setDaySelected(IndexButtonSelected);
  };

  return (
    <C.Container>
      <DaysButtons
        onPress={handleSelectDay}
        days={['Today', 'Tomorrow', 'After Tomorrow']}
      />

      {loadingForecast ? (
        <C.LoadingWrapper>
          <ActivityIndicator size="large" color="#0000ff" />
        </C.LoadingWrapper>
      ) : null}

      {forecast.length > 0 ? (
        <>
          <WeatherDetails weather={forecast[daySelected]} />
          <NextDays forecast={forecast.slice(1, 6)} />
        </>
      ) : null}
    </C.Container>
  );
};

export default Main;
