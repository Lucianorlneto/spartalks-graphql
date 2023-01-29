import {useQuery} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useCallback} from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import Background from '../../components/Background';
import {
  LoadingContainer,
  MainListImage,
} from '../../styles/GlobalStyledComponents';
import {gql} from '../../__generated__';
import {Characters, Container} from './styles';

export const CHARACTERS_QUERY = gql(`
query Characters {
  characters {
    id
    image
  }
}
`);

const CharactersList: React.FC = () => {
  const {data, loading} = useQuery(CHARACTERS_QUERY);

  const {navigate} = useNavigation();

  const renderItem = useCallback(
    ({item}: {item: Character}) => (
      <TouchableOpacity
        onPress={() => navigate('CharacterDetails', {id: item.id})}>
        <MainListImage resizeMode="contain" source={{uri: item.image}} />
      </TouchableOpacity>
    ),
    [navigate],
  );

  if (loading) {
    <LoadingContainer>
      <Background />
      <ActivityIndicator size={'large'} />
    </LoadingContainer>;
  }

  return (
    <Container>
      <Background />
      <Characters data={data?.characters} renderItem={renderItem} />
    </Container>
  );
};

export default CharactersList;
