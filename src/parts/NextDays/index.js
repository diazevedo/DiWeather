import React from 'react';

import CardForecast from '~/components/CardForecast';
import ListFooter from '~/components/ListFooter';

import * as C from './styles';

const forecast = [
  {
    id: 0,
    day: 'monday',
    condition: 'sunny',
    degreesAverage: 40,
    degreesMin: 56,
    degreesMax: 69,
  },
  {
    id: 1,
    day: 'tuesday',
    condition: 'windy',
    degreesAverage: 50,
    degreesMin: 52,
    degreesMax: 64,
  },
  {
    id: 2,
    day: 'wed',
    condition: 'storms',
    degreesAverage: 50,
    degreesMin: 52,
    degreesMax: 62,
  },
  {
    id: 3,
    day: 'thursday',
    condition: 'cloudy',
    degreesAverage: 25,
    degreesMin: 20,
    degreesMax: 30,
  },
];

const NextDays = () => {
  return (
    <C.Container>
      <C.ListHeader>
        <C.ListHeaderText>Next 15 days</C.ListHeaderText>
      </C.ListHeader>
      <C.List
        data={forecast}
        renderItem={({ item }) => (
          <CardForecast
            day={item.day}
            degreesAverage={item.degreesAverage}
            degreesMin={item.degreesMin}
            degreesMax={item.degreesMax}
            condition={item.condition}
          />
        )}
        keyExtractor={(item) => String(item.id)}
        horizontal
      />
      <ListFooter circles={3} />
    </C.Container>
  );
};

export default NextDays;
