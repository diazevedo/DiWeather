import React from 'react';
import background from '~/assets/images/background-init.png';

import * as C from './styles';

const Initial = ({ navigation }) => {
  return (
    <C.Container>
      <C.Background source={background}>
        <C.ExploreButton onPress={() => navigation.navigate('Main')}>
          <C.WrapperExploreButtion>
            <C.Text>Explore</C.Text>
          </C.WrapperExploreButtion>
        </C.ExploreButton>
      </C.Background>
    </C.Container>
  );
};

export default Initial;
