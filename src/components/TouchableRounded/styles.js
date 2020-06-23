import styled from 'styled-components/native';
import colors from '~/styles/colors';

import { TouchableOpacity } from 'react-native-gesture-handler';

export const Button = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${(props) =>
    props.isActive === 1 ? colors.activeBackground : 'transparent'};
`;

export const Text = styled.Text`
  color: ${(props) => (props.isActive === 1 ? colors.active : colors.primary)};
  font-weight: ${(props) => (props.isActive === 1 ? '600' : 'normal')};
  font-size: 16px;
`;
