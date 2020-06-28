import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '~/styles/colors';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.second};
`;

export const LoadingWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;
