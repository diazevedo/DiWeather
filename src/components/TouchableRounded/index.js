import React from 'react';

import * as C from './styles';

const TouchableRounded = ({ text, isActive, onPress }) => {
  return (
    <C.Button onPress={onPress}>
      <C.Text isActive={isActive}>{text}</C.Text>
    </C.Button>
  );
};

export default TouchableRounded;
