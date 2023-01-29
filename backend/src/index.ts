import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { CharactersResolver } from "./resolvers/CharactersResolver";
import { GamesResolver } from "./resolvers/GamesResolver";

const fs = require('fs');

async function main(){
    const typeDefs = fs.readFileSync(require.resolve('./schema.graphql')).toString('utf-8');
    
    const server = new ApolloServer({
        typeDefs,
        resolvers: [CharactersResolver, GamesResolver]
    });

    const {url} = await startStandaloneServer(server, {
        listen: {port: 4000}
    });

    console.log(`🚀  Server ready at: ${url}`);
}

main();