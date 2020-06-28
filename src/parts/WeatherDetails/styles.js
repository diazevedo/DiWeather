import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const ContainerImage = styled.View`
  position: relative;
`;

export const ImageBackground = styled.ImageBackground`
  width: 375px;
  height: 315px;
  background-color: ${colors.active};
  border-radius: 44px;
`;

export const Image = styled.Image`
  position: absolute;
  right: -10%;
  bottom: -10%;
  width: 171px;
  height: 140px;
`;

export const ContainerConditions = styled.View`
  margin-top: 40px;
  position: absolute;
  align-items: center;
`;

export const Degrees = styled.Text.attrs({ includeFontPadding: false })`
  font-size: 120px;
  color: ${colors.second};
  font-weight: 500;
  height: 120px;
`;

export const Condition = styled.Text`
  font-size: 27px;
  color: ${colors.second};
  margin-top: 18px;
  text-align: auto;
  text-transform: capitalize;
`;

export const Humidity = styled.Text`
  font-size: 25px;
  color: ${colors.second};
  font-weight: 600;
  opacity: ${(props) => (props.isLast ? '0.5' : '1')};
  margin-top: 10px;
`;
