import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import colors from '~/styles/colors';

export const Container = styled.View``;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ExploreButton = styled(TouchableOpacity)`
  position: absolute;
  bottom: 100px;
  width: 65%;
`;

export const WrapperExploreButtion = styled.View`
  height: 25%;
  padding: 20px;
  border-radius: 50px;
  background-color: ${colors.second};
  flex: 1;
`;

export const Text = styled.Text`
  text-align: center;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #000;
`;
