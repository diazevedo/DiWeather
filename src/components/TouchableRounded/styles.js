import styled from 'styled-components/native';
import colors from '~/styles/colors';

import { TouchableOpacity } from 'react-native-gesture-handler';

export const Button = styled(TouchableOpacity)`
  align-items: center;
`;

export const Text = styled.Text`
  color: ${(props) => (props.isActive ? colors.active : colors.primary)};
  font-weight: ${(props) => (props.isActive ? '600' : 'normal')};
  font-size: 16px;
`;
