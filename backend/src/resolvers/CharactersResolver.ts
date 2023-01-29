import { characters, games as defaultGames } from "../utils/consts";

export interface Character{
    id: string;
    name: string;
    gender: string;
    age: string;
    image: string;
    games: {id: string}[]
}

export interface NewCharacter{
    name: string;
    gender: string;
    age: string;
    image: string;
    games: {id: string, isPlayable: boolean}[]
}

export const CharactersResolver = {
    Mutation: {
        createCharacter: (_: any, {input}: {input: NewCharacter}) => {
            const id = "7";
            const {name, age, games, gender, image} = input;
            const newChar = {
                id,
                name,
                gender,
                age,
                image,
                games: games.map(game => ({id: game.id}))
            };

            characters.push(newChar);
            games.map(newCharGame => {
                const game = defaultGames.find(game => game.id === newCharGame.id)

                game?.characters.push({id})
                if(newCharGame.isPlayable){
                    game?.playable_characters.push({id})
                }
            })

            return newChar;
        }
    },
    Query: {
        characters: () => characters,
        character: (_: any, {id}: {id: string}) => characters.find(char => char.id === id)
    },
    Character: {
        name: (parent: Character) => {
            return characters.find(char => char.id === parent.id)?.name
        },
        gender: ({id}: {id: string}) => {
            return characters.find(char => char.id === id)?.gender
        },
        age: ({id}: {id: string}) => {
            return characters.find(char => char.id === id)?.age
        },
        image: ({id}: {id: string}) => {
            return characters.find(char => char.id === id)?.image
        },
        games: ({id}: {id: string}) => {
            return characters.find(char => char.id === id)?.games
        }
    }
}