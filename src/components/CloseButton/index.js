import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import * as C from './styles';

const CloseButton = () => {
  return (
    <C.TouchableContainer>
      <C.Container>
        <Icon size={30} color="white" name="x" />
      </C.Container>
    </C.TouchableContainer>
  );
};

export default CloseButton;
