import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
`;

export const Button = styled(TouchableOpacity)`
  margin-right: 10px;
`;
