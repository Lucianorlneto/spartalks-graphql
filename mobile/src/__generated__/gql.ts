/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\nquery Character($characterId: String!) {\n  character(id: $characterId) {\n    id\n    name\n    gender\n    image\n    age\n    games {\n      id\n      image\n    }\n  }\n}\n": types.CharacterDocument,
    "\nquery Characters {\n  characters {\n    id\n    image\n  }\n}\n": types.CharactersDocument,
    "\nquery Game($gameId: String!) {\n  game(id: $gameId) {\n    name\n    image\n    date\n    platform\n    characters {\n      id\n      image\n    }\n    playableCharacters {\n      id\n      image\n    }\n  }\n}\n": types.GameDocument,
    "\nquery Games {\n  games {\n    id\n    image\n  }\n}\n": types.GamesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Character($characterId: String!) {\n  character(id: $characterId) {\n    id\n    name\n    gender\n    image\n    age\n    games {\n      id\n      image\n    }\n  }\n}\n"): (typeof documents)["\nquery Character($characterId: String!) {\n  character(id: $characterId) {\n    id\n    name\n    gender\n    image\n    age\n    games {\n      id\n      image\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Characters {\n  characters {\n    id\n    image\n  }\n}\n"): (typeof documents)["\nquery Characters {\n  characters {\n    id\n    image\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Game($gameId: String!) {\n  game(id: $gameId) {\n    name\n    image\n    date\n    platform\n    characters {\n      id\n      image\n    }\n    playableCharacters {\n      id\n      image\n    }\n  }\n}\n"): (typeof documents)["\nquery Game($gameId: String!) {\n  game(id: $gameId) {\n    name\n    image\n    date\n    platform\n    characters {\n      id\n      image\n    }\n    playableCharacters {\n      id\n      image\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Games {\n  games {\n    id\n    image\n  }\n}\n"): (typeof documents)["\nquery Games {\n  games {\n    id\n    image\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;