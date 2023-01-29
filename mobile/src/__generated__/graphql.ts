/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Character = {
  __typename?: 'Character';
  age: Scalars['String'];
  games?: Maybe<Array<Maybe<Game>>>;
  gender: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
};

export type Game = {
  __typename?: 'Game';
  characters?: Maybe<Array<Maybe<Character>>>;
  date: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  platform: Scalars['String'];
  playableCharacters?: Maybe<Array<Maybe<Character>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCharacter?: Maybe<Character>;
};


export type MutationCreateCharacterArgs = {
  input?: InputMaybe<NewCharacterInput>;
};

export type NewCharacterGameInput = {
  id: Scalars['String'];
  isPlayable: Scalars['Boolean'];
};

export type NewCharacterInput = {
  age: Scalars['String'];
  games?: InputMaybe<Array<InputMaybe<NewCharacterGameInput>>>;
  gender: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  character?: Maybe<Character>;
  characters?: Maybe<Array<Maybe<Character>>>;
  game?: Maybe<Game>;
  games?: Maybe<Array<Maybe<Game>>>;
  test?: Maybe<Test>;
};


export type QueryCharacterArgs = {
  id: Scalars['String'];
};


export type QueryGameArgs = {
  id: Scalars['String'];
};

export type Test = {
  __typename?: 'Test';
  text?: Maybe<Scalars['String']>;
  textAux?: Maybe<Scalars['String']>;
};

export type CharacterQueryVariables = Exact<{
  characterId: Scalars['String'];
}>;


export type CharacterQuery = { __typename?: 'Query', character?: { __typename?: 'Character', id: string, name: string, gender: string, image: string, age: string, games?: Array<{ __typename?: 'Game', id: string, image: string } | null> | null } | null };

export type CharactersQueryVariables = Exact<{ [key: string]: never; }>;


export type CharactersQuery = { __typename?: 'Query', characters?: Array<{ __typename?: 'Character', id: string, image: string } | null> | null };

export type GameQueryVariables = Exact<{
  gameId: Scalars['String'];
}>;


export type GameQuery = { __typename?: 'Query', game?: { __typename?: 'Game', name: string, image: string, date: string, platform: string, characters?: Array<{ __typename?: 'Character', id: string, image: string } | null> | null, playableCharacters?: Array<{ __typename?: 'Character', id: string, image: string } | null> | null } | null };

export type GamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GamesQuery = { __typename?: 'Query', games?: Array<{ __typename?: 'Game', id: string, image: string } | null> | null };


export const CharacterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Character"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"characterId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"character"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"characterId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"games"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<CharacterQuery, CharacterQueryVariables>;
export const CharactersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Characters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"characters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<CharactersQuery, CharactersQueryVariables>;
export const GameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Game"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"characters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"playableCharacters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<GameQuery, GameQueryVariables>;
export const GamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Games"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"games"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<GamesQuery, GamesQueryVariables>;