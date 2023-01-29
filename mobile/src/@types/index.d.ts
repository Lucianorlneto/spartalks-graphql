declare module '*.jpg';
declare module '*.png';

interface Character {
  id: string;
  name: string;
  gender: string;
  age: string;
  image: string;
  games: Game[] | {id: string}[];
}

interface Game {
  id: string;
  name: string;
  platform: string;
  date: string;
  image: string;
  playable_characters: Character[] | {id: string}[];
  characters: Character[] | {id: string}[];
}
