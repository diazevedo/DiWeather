import React from 'react';

import * as C from './styles';

const TouchableRounded = ({ text, isActive = 0 }) => {
  console.tron.log(isActive);
  return (
    <C.Button>
      <C.Text isActive={isActive}>{text}</C.Text>
    </C.Button>
  );
};

export default TouchableRounded;
