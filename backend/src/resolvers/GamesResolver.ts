import { games } from "../utils/consts";

export interface Game{
    id: string;
    name: string;
    image: string;
    playable_characters: {id: string}[];
    characters: {id: string}[];
}

export const GamesResolver = {
    Query: {
        games: () => games,
        game: (_: any, {id}: {id: string}) => games.find(game => game.id === id)
    },
    Game: {
        name: (parent: {id: string}) => {
            return games.find(game => game.id === parent.id)?.name
        },
        platform: (parent: {id: string}) => {
            return games.find(game => game.id === parent.id)?.platform
        },
        date: (parent: {id: string}) => {
            return games.find(game => game.id === parent.id)?.date
        },
        image: (parent: {id: string}) => {
            return games.find(game => game.id === parent.id)?.image
        },
        characters: ({id}: {id: string}) => {
            return games.find(game => game.id === id)?.characters
        },
        playableCharacters: ({id}: {id: string}) => {
            return games.find(game => game.id === id)?.playable_characters
        }
    }
}