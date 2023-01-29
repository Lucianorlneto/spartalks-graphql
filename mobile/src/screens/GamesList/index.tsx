import {useQuery} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import Background from '../../components/Background';
import {
  LoadingContainer,
  MainListImage,
} from '../../styles/GlobalStyledComponents';
import {gql} from '../../__generated__';
import {Container, Games} from './styles';

export const GAMES_QUERY = gql(`
query Games {
  games {
    id
    image
  }
}
`);

const GamesList: React.FC = () => {
  const {data, loading} = useQuery(GAMES_QUERY);
  const {navigate} = useNavigation();

  const renderItem = useCallback(
    ({item}: {item: Character}) => (
      <TouchableOpacity onPress={() => navigate('GameDetails', {id: item.id})}>
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
      <Games data={data?.games} renderItem={renderItem} />
    </Container>
  );
};

export default GamesList;
