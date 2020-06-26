import styled from 'styled-components/native';
import colors from '~/styles/colors';
import fontSizes from '~/styles/fontsSizes';

export const Container = styled.View`
  width: 100%;
  background-color: #fff;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.third,
})`
  align-self: center;
  width: 50%;
  text-align: center;
  color: ${colors.primary};
  font-size: ${fontSizes.medium};
  font-weight: 500;
`;
