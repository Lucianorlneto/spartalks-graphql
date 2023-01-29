import styled from 'styled-components/native';

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const MainListImage = styled.Image`
  height: 200px;
  width: 200px;
  margin: 16px;
  align-self: center;
`;

export const DetailsLabel = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

export const DetailsText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

export const DetailsContainer = styled.View`
  height: 300px;
  flex-direction: row;
  justify-content: space-around;
  padding: 8px;
`;

export const DataContainer = styled.View`
  margin-left: 8px;
  width: 50%;
  justify-content: space-around;
`;

export const MainImage = styled.Image`
  height: 100%;
  width: 50%;
  align-self: flex-end;
  flex: 1;
`;

export const SecondaryListContainer = styled.TouchableOpacity`
  margin: 16px 0px;
  height: 200px;
  width: 150px;
  margin: 16px;
`;

export const SecondaryImage = styled.Image`
  height: 100%;
`;
