import React from 'react';
import TouchableRounded from '~/components/TouchableRounded';

import * as C from './styles';

const DaysButton = ({
  onPress,
  days = ['Today', 'Tomorrow', 'After Tomorrow'],
}) => {
  const [activedButton, setActivedButton] = React.useState(0);

  const handlePressButton = (pressedButtonIndex) => {
    onPress(pressedButtonIndex);
    setActivedButton(pressedButtonIndex);
  };

  return (
    <C.Wrapper>
      {days.map((d, i) => (
        <C.ButtonWrapper key={i} isActive={activedButton === i}>
          <TouchableRounded
            text={d}
            isActive={activedButton === i}
            onPress={() => handlePressButton(i)}
          />
        </C.ButtonWrapper>
      ))}
    </C.Wrapper>
  );
};

export default DaysButton;
