import {useQuery} from '@apollo/client';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {AppStackParamList} from '../../../@types/navigation';
import Background from '../../../components/Background';
import {
  DataContainer,
  DetailsContainer,
  DetailsLabel,
  DetailsText,
  LoadingContainer,
  MainImage,
  SecondaryImage,
  SecondaryListContainer,
} from '../../../styles/GlobalStyledComponents';
import {gql} from '../../../__generated__';
import {Container, Characters, ScrollView} from './styles';

export const GAME_QUERY = gql(`
query Game($gameId: String!) {
  game(id: $gameId) {
    name
    image
    date
    platform
    characters {
      id
      image
    }
    playableCharacters {
      id
      image
    }
  }
}
`);

type GameDetailsRouteProps = RouteProp<AppStackParamList, 'GameDetails'>;

const GameDetails: React.FC = ({}) => {
  const {setOptions, navigate} = useNavigation();
  const {params} = useRoute<GameDetailsRouteProps>();
  const {data, loading} = useQuery(GAME_QUERY, {
    variables: {gameId: params.id},
  });

  useEffect(() => {
    setOptions({title: data?.game?.name});
  }, [data?.game?.name, setOptions]);

  const renderItem = useCallback(
    ({item}: {item: Game}) => (
      <SecondaryListContainer
        onPress={() => navigate('CharacterDetails', {id: item.id})}>
        <SecondaryImage resizeMode="contain" source={{uri: item.image}} />
      </SecondaryListContainer>
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
    <>
      <Background />
      <Container>
        <ScrollView>
          <DetailsContainer>
            <MainImage resizeMode="contain" source={{uri: data?.game?.image}} />
            <DataContainer>
              <View>
                <DetailsLabel>Name:</DetailsLabel>
                <DetailsText>{data?.game?.name}</DetailsText>
              </View>
              <View>
                <DetailsLabel>Original Platform:</DetailsLabel>
                <DetailsText>{data?.game?.platform}</DetailsText>
              </View>
              <View>
                <DetailsLabel>Launch date:</DetailsLabel>
                <DetailsText>{data?.game?.date}</DetailsText>
              </View>
            </DataContainer>
          </DetailsContainer>
          <View>
            <DetailsText>Characters:</DetailsText>
            <Characters data={data?.game?.characters} renderItem={renderItem} />
          </View>
          <View>
            <DetailsText>Playable Characters:</DetailsText>
            <Characters
              data={data?.game?.playableCharacters}
              renderItem={renderItem}
            />
          </View>
        </ScrollView>
      </Container>
    </>
  );
};

export default GameDetails;
