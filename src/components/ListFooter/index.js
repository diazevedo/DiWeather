import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '~/styles/colors';
import * as C from './styles';

const ListFooter = ({ numOfButtons, buttonSelected, onPress }) => {
  const Buttons = () => {
    const newButtons = [];

    for (let i = 0; i < numOfButtons; i++) {
      let color = buttonSelected === i ? colors.active : colors.third;

      newButtons.push(
        <C.Button key={i} onPress={() => onPress(i)}>
          <Icon name="circle" size={18} color={color} />
        </C.Button>,
      );
    }

    return newButtons;
  };

  return <C.Container>{Buttons()}</C.Container>;
};

export default ListFooter;
