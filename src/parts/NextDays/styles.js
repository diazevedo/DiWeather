import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '~/styles/colors';

export const Container = styled.View`
  padding: 20px;
  margin-top: 30px;
`;
export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
`;

export const ListHeader = styled.View``;

export const ListHeaderText = styled.Text`
  font-size: 22px;
  font-weight: 600;
  color: ${colors.primary};
`;

export const ListFooter = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
`;

export const Button = styled(TouchableOpacity)`
  margin-right: 10px;
`;
