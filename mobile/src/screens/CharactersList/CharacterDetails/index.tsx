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
import {Container, Games, MainContainer} from './styles';

export const CHARACTER_QUERY = gql(`
query Character($characterId: String!) {
  character(id: $characterId) {
    id
    name
    gender
    image
    age
    games {
      id
      image
    }
  }
}
`);

type CharacterDetailsRouteProps = RouteProp<
  AppStackParamList,
  'CharacterDetails'
>;

const CharacterDetails: React.FC = ({}) => {
  const {setOptions, navigate} = useNavigation();
  const {params} = useRoute<CharacterDetailsRouteProps>();
  const {data, loading} = useQuery(CHARACTER_QUERY, {
    variables: {characterId: params.id},
  });

  console.log(data);

  useEffect(() => {
    setOptions({title: data?.character?.name});
  }, [data?.character?.name, setOptions]);

  const renderItem = useCallback(
    ({item}: {item: Game}) => (
      <SecondaryListContainer
        onPress={() => navigate('GameDetails', {id: item.id})}>
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
    <MainContainer>
      <Background />
      <Container>
        <DetailsContainer>
          <MainImage
            resizeMode="contain"
            source={{uri: data?.character?.image}}
          />
          <DataContainer>
            <View>
              <DetailsLabel>Name:</DetailsLabel>
              <DetailsText>{data?.character?.name}</DetailsText>
            </View>
            <View>
              <DetailsLabel>Gender:</DetailsLabel>
              <DetailsText>{data?.character?.gender}</DetailsText>
            </View>
            <View>
              <DetailsLabel>Age:</DetailsLabel>
              <DetailsText>{data?.character?.age} years old</DetailsText>
            </View>
          </DataContainer>
        </DetailsContainer>
        <View>
          <DetailsText>Games:</DetailsText>
          <Games data={data?.character?.games} renderItem={renderItem} />
        </View>
      </Container>
    </MainContainer>
  );
};

export default CharacterDetails;
