import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const ContainerImage = styled.View`
  position: relative;
`;

export const ImageBackground = styled.ImageBackground`
  width: 375px;
  height: 315px;
  background-color: #5d50fe;
  border-radius: 44px;
`;

export const Image = styled.Image`
  position: absolute;
  right: -5%;
  bottom: -10%;
`;

export const ContainerConditions = styled.View`
  position: absolute;
  align-items: center;
`;

export const Degrees = styled.Text`
  font-size: 100px;
  align-self: center;
  color: ${colors.second};
  font-weight: 600;
`;

export const Condition = styled.Text`
  font-size: 27px;
  color: ${colors.second};
  margin-bottom: 15px;
`;

export const Humidity = styled.Text`
  font-size: 25px;
  color: ${colors.second};
  margin-top: 4px;
  font-weight: 600;
`;
