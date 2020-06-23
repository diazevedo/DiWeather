import React from 'react';
import TouchableWithIcon from '~/components/TouchableWithIcon';

import colors from '~/styles/colors';
import * as C from './styles';

const Header = () => {
  return (
    <C.Container>
      <TouchableWithIcon icon="align-left" size={30} color={colors.primary} />
      <C.Input placeholder="city..." value="India, Mumbai" />
      <TouchableWithIcon icon="search" size={30} color={colors.primary} />
    </C.Container>
  );
};

export default Header;
