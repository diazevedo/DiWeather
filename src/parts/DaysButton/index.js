import React from 'react';
import TouchableRounded from '~/components/TouchableRounded';

import * as C from './styles';

const DaysButton = () => {
  return (
    <C.Wrapper>
      <C.ButtonWrapper isActive={1}>
        <TouchableRounded text="Today" isActive={1} />
      </C.ButtonWrapper>

      <C.ButtonWrapper>
        <TouchableRounded text="Tomorrow " isActive={0} />
      </C.ButtonWrapper>
      <C.ButtonWrapper>
        <TouchableRounded text="Next Week" isActive={0} />
      </C.ButtonWrapper>
    </C.Wrapper>
  );
};

export default DaysButton;
