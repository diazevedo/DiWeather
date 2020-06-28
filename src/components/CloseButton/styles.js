import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const TouchableContainer = styled(TouchableOpacity)`
  /* position: absolute; */
  /* top: -15px; */
  z-index: 10000;
  background-color: blue;
  align-self: center;
  /* align-self: 'center'; */
  top: 2px;

  width: 45px;
  height: 5px;

  /* border-radius: 5px; */
  /* background-color: rgba(255, 255, 255, 0.8); */
  /* top: 0; */
`;

export const Container = styled.View``;
