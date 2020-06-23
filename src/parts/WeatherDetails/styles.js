import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  align-items: center;
  /* justify-content: center; */
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
  width: 185px;
  height: 151px;
`;

export const ContainerConditions = styled.View`
  margin-top: 45px;
  position: absolute;
  align-items: center;
`;

export const Degrees = styled.Text.attrs({ includeFontPadding: false })`
  font-size: 115px;
  color: ${colors.second};
  font-weight: 600;
  height: 115px;
`;

export const Condition = styled.Text`
  font-size: 27px;
  color: ${colors.second};
  margin-top: 15px;
  text-align: auto;
`;

export const Humidity = styled.Text`
  font-size: 25px;
  color: ${colors.second};
  font-weight: 600;
  /* margin-top: 20px; */
  opacity: ${(props) => (props.isLast ? '0.5' : '1')};
  margin-top: ${(props) => (props.isLast ? '10px' : '20px')};
`;
