import React from 'react';

import CardForecast from '~/components/CardForecast';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    condition: 'storms',
    degreesAverage: 50,
    degreesMin: 52,
    degreesMax: 64,
  },
  {
    id: 2,
    day: 'wed',
    condition: 'cloudy',
    degreesAverage: 50,
    degreesMin: 52,
    degreesMax: 62,
  },
  {
    id: 3,
    day: 'thursday',
    condition: 'windy',
    degreesAverage: 25,
    degreesMin: 20,
    degreesMax: 30,
  },
];

const icons = {
  storms: '~/assets/images/storms.png',
  sunny: '~/assets/images/sunny.png',
  cloudy: '.~/assets/images/rainny.png',
  windy: '~/assets/images/windy.png',
};

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
      <C.ListFooter>
        <C.Button>
          <Icon name="circle" size={22} color="#5D50FE" />
        </C.Button>
        <C.Button>
          <Icon name="circle" size={22} color="#E7E4FF" />
        </C.Button>
        <C.Button>
          <Icon name="circle" size={22} color="#E7E4FF" />
        </C.Button>
      </C.ListFooter>
    </C.Container>
  );
};

export default NextDays;
