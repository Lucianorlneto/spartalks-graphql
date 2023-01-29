import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const Characters = styled(
  FlatList as new () => FlatList<Character>,
).attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
}))`
  margin: 12px;
  height: 100%;
  width: 100%;
`;
