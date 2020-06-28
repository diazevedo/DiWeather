/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Modalize } from 'react-native-modalize';
import CardForecast from '~/components/CardForecast';
import ListFooter from '~/components/ListFooter';
import Modal from '~/components/Modal';

import colors from '~/styles/colors';
import { Button, Text } from 'react-native';

import * as C from './styles';

const NextDays = ({ forecast }) => {
  const flatListRef = React.createRef();
  const modalizeRef = React.useRef(null);
  const [weatherData, setWeatherData] = React.useState(null);
  const [modalBackgroundColor, setModalBackgroundColor] = React.useState(
    colors.monday,
  );

  const onOpen = (weather) => {
    setModalBackgroundColor(colors[weather.day]);
    setWeatherData(weather);
    modalizeRef.current?.open();
  };

  return (
    <C.Container>
      <C.ListHeader>
        <C.ListHeaderText>Next 15 days</C.ListHeaderText>
      </C.ListHeader>
      <C.List
        data={forecast}
        // pagingEnabled
        // initialScrollIndex={5}
        // onViewableItemsChanged={(c) => console.tron.log(c)}
        // onMomentumScrollBegin={() => console.tron.log(5454)}
        ref={flatListRef}
        renderItem={({ item }) => (
          <CardForecast
            day={item.day}
            degreesAverage={item.temp}
            degreesMin={item.temp_min_day}
            degreesMax={item.temp_max_day}
            condition={item.conditionCode}
            onPress={() => onOpen(item)}
          />
        )}
        keyExtractor={(item, i) => String(i)}
        horizontal
        // ListFooterComponent={() => (
        //   <ListFooter circles={3} flatRef={flatListRef} />
        // )}
      />
      {/* <Button
        title="buuton"
        onPress={() =>
          // flatListRef.current.scrollToIndex({ index: 2, animated: true })
          flatListRef.current.scrollToOffset({ offset: 250, animated: true })
        }
      /> */}
      <ListFooter circles={3} flatRef={flatListRef} />

      <Modalize
        ref={modalizeRef}
        modalTopOffset={90}
        modalStyle={{
          backgroundColor: modalBackgroundColor,

          borderTopRightRadius: 60,
          borderTopLeftRadius: 60,
          alignItems: 'center',
        }}
        withOverlay={true}>
        <Modal weatherData={weatherData} />
      </Modalize>
    </C.Container>
  );
};

export default NextDays;
