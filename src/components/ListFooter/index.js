import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as C from './styles';

const ListFooter = ({ circles }) => {
  const Buttons = (numberOfCircles) => {
    const newButtons = [];

    for (let i = 0; i < numberOfCircles; i++) {
      newButtons.push(
        <C.Button key={i} onPress={() => console.tron.log(1)}>
          <Icon name="circle" size={18} color="#5D50FE" />
        </C.Button>,
      );
    }

    return newButtons;
  };

  return <C.Container>{Buttons(circles)}</C.Container>;
};

export default ListFooter;
