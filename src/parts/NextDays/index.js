/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Modalize } from 'react-native-modalize';
import CardForecast from '~/components/CardForecast';
import ListFooter from '~/components/ListFooter';
import Modal from '~/components/Modal';

import colors from '~/styles/colors';

import * as C from './styles';

const NextDays = ({ forecast }) => {
  const flatListRef = React.createRef();
  const modalizeRef = React.useRef(null);

  const [activedItem, setActivedItem] = React.useState(0);

  const onViewRef = React.useRef((viewableItems, i) => {
    let item = 0;

    if (viewableItems.viewableItems[0].index === 0) {
      item = 0;
    } else if (viewableItems.viewableItems[0].index <= 1) {
      item = 1;
    } else if (viewableItems.viewableItems[0].index <= 3) {
      item = 2;
    }

    setActivedItem(item);
  });

  const viewConfigRef = React.useRef({
    itemVisiblePercentThreshold: 100,
  });

  const [weatherData, setWeatherData] = React.useState(null);
  const [modalBackgroundColor, setModalBackgroundColor] = React.useState(
    colors.monday,
  );

  const onOpen = (weather) => {
    setModalBackgroundColor(colors[weather.day]);
    setWeatherData(weather);
    modalizeRef.current?.open();
  };

  const onPress = (index) => {
    let itemfocus = 0;
    if (index === 1) {
      itemfocus = 1;
    } else if (index === 2) {
      itemfocus = 3;
    }

    setActivedItem(itemfocus);
    flatListRef.current.scrollToIndex({ index: itemfocus, animated: false });
  };

  return (
    <C.Container>
      <C.ListHeader>
        <C.ListHeaderText>Next 15 days</C.ListHeaderText>
      </C.ListHeader>
      <C.List
        data={forecast}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
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
      />

      <ListFooter
        numOfButtons={3}
        flatRef={flatListRef}
        buttonSelected={activedItem}
        onPress={onPress}
      />

      <Modalize
        ref={modalizeRef}
        modalTopOffset={20}
        modalStyle={{
          backgroundColor: modalBackgroundColor,
          borderTopRightRadius: 60,
          borderTopLeftRadius: 60,
          alignItems: 'center',
        }}
        withOverlay={false}>
        <Modal weatherData={weatherData} />
      </Modalize>
    </C.Container>
  );
};

export default NextDays;
