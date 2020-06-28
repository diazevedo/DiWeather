import React from 'react';

import CardForecast from '~/components/CardForecast';
import ListFooter from '~/components/ListFooter';

import { Button, Text } from 'react-native';

import * as C from './styles';

const NextDays = ({ forecast }) => {
  const flatListRef = React.createRef();
  console.tron.log(forecast, 'next days');

  return (
    <C.Container>
      <C.ListHeader>
        <C.ListHeaderText>Next 15 days</C.ListHeaderText>
      </C.ListHeader>
      <C.List
        data={forecast[0]}
        // pagingEnabled
        // initialScrollIndex={5}
        onViewableItemsChanged={(c) => console.tron.log(c)}
        // onMomentumScrollBegin={() => console.tron.log(5454)}
        ref={flatListRef}
        renderItem={({ item }) => (
          <CardForecast
            day={item.day}
            degreesAverage={item.temp}
            degreesMin={item.temp_min_day}
            degreesMax={item.temp_max_day}
            condition={item.conditionCode}
          />
        )}
        keyExtractor={(item, i) => String(i)}
        horizontal
        // ListFooterComponent={() => (
        //   <ListFooter circles={3} flatRef={flatListRef} />
        // )}
      />
      <Button
        title="buuton"
        onPress={() =>
          // flatListRef.current.scrollToIndex({ index: 2, animated: true })
          flatListRef.current.scrollToOffset({ offset: 250, animated: true })
        }
      />
      <ListFooter circles={3} flatRef={flatListRef} />
    </C.Container>
  );
};

export default NextDays;
