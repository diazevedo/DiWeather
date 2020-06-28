import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import colors from '~/styles/colors';

export const TouchableView = styled(TouchableOpacity)``;

export const Container = styled.View`
  height: 100%;
  width: 100%;
  padding: 20px;
`;

export const TodayDegreeContainer = styled.View`
  align-items: center;
  margin-top: 25px;

  justify-content: space-between;
  padding: 0px 55px;
`;

export const Day = styled.Text`
  margin-top: 50px;
  font-size: 48px;
  font-weight: 600;
  color: ${colors.second};
  text-transform: capitalize;
`;

export const RegularText = styled.Text`
  opacity: ${(props) => (props.isMin ? '0.5' : '1')};
  font-size: 30px;
  font-weight: 600;
  color: ${colors.second};
  text-transform: capitalize;
`;

export const IconWrapper = styled.View`
  margin-top: 35px;
  width: 150px;
  height: 150px;
  margin-bottom: 35px;
`;

export const AverageDegree = styled.Text`
  font-size: 60px;
  color: ${colors.second};
`;

export const DegreesContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 25px;
`;
