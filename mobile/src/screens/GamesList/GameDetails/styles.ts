import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-bottom: 32px;
`;

export const ScrollView = styled.ScrollView.attrs(() => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
  },
}))`
  padding: 0px 16px;
`;

export const Characters = styled(FlatList as new () => FlatList<Game>).attrs(
  () => ({
    horizontal: true,
  }),
)``;
