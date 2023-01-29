import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const MainContainer = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  margin: 16px;
  flex: 1;
`;

export const Games = styled(FlatList as new () => FlatList<Game>).attrs(() => ({
  horizontal: true,
  contentContainerStyle: {},
}))``;
