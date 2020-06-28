import styled from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  padding: 20px 0px 80px 20px;
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
