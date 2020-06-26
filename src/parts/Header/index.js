import React from 'react';
import TouchableWithIcon from '~/components/TouchableWithIcon';

import { useDispatch, useSelector } from 'react-redux';
import { setCityName } from '~/store/modules/searchedCity/actions';

import colors from '~/styles/colors';
import * as C from './styles';

const Header = () => {
  const city = useSelector((state) => state.searchedCity.city);
  const [inputValue, setInputValue] = React.useState(city);
  const dispatch = useDispatch();

  const handleSubmit = () => dispatch(setCityName(inputValue));

  return (
    <C.Container>
      <TouchableWithIcon icon="align-left" size={30} color={colors.primary} />
      <C.Input
        placeholder="city, country"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TouchableWithIcon
        icon="search"
        size={30}
        color={colors.primary}
        onPress={handleSubmit}
      />
    </C.Container>
  );
};

export default Header;
