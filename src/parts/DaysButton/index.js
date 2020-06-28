import React from 'react';
import TouchableRounded from '~/components/TouchableRounded';
import { useSelector } from 'react-redux';

import * as C from './styles';

const DaysButton = ({ onPress, days }) => {
  const searchedCity = useSelector((state) => state.searchedCity.city);
  const [activedButton, setActivedButton] = React.useState(0);

  const handlePressButton = (pressedButtonIndex) => {
    onPress(pressedButtonIndex);
    setActivedButton(pressedButtonIndex);
  };

  React.useEffect(() => {
    return () => setActivedButton(0);
  }, [searchedCity]);

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
