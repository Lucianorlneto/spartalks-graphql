import {NavigatorScreenParams} from '@react-navigation/native';

export type BottomTabsParamList = {
  CharactersList: undefined;
  GamesList: undefined;
};

export type AppStackParamList = {
  Main: NavigatorScreenParams<BottomTabsParamList>;
  CharacterDetails: {
    id: string;
  };
  GameDetails: {
    id: string;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}
