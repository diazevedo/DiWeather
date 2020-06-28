import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  height: 25%;
  width: 100%;
  padding: 20px 35px;
  margin-top: 12%;
  border-radius: 25px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.second};
`;

export const TouchableHour = styled.TouchableOpacity`
  padding: 10px;
`;

export const ViewTouchableHour = styled.View`
  width: auto;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const IconWrapper = styled.View`
  width: 35px;
  height: 35px;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

export const DegreeHourText = styled.Text`
  font-size: 22px;
  font-weight: 400;
`;
