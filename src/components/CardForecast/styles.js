import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import colors from '~/styles/colors';

export const TouchableView = styled(TouchableOpacity)``;

export const Container = styled.View`
  margin-top: 20px;
  background-color: ${(props) => colors[props.dayColor]};
  opacity: 0.9;

  margin-right: 20px;
  width: 130px;
  height: 200px;
  border-radius: 30px;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`;

export const RegularText = styled.Text`
  opacity: ${(props) => (props.isMin ? '0.5' : '1')};
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  text-transform: capitalize;
`;

export const IconWrapper = styled.View`
  width: 55px;
  height: 50px;
`;

export const ImageBackground = styled.ImageBackground`
  width: 150px;
  height: 110px;
  position: absolute;
  bottom: -10%;
`;

export const AverageDegree = styled.Text`
  font-size: 27px;
  color: #fff;
`;

export const DegreesContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;
