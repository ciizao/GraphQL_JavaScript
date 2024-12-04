// Importamos las dependencias necesarias
const { ApolloServer, gql } = require('apollo-server');

// Definimos el esquema GraphQL
// Ahora la consulta "hello" devuelve un objeto con nombre y año
const typeDefs = gql`
  type Query {
    hello: String
    info: Info
  }

  type Info {
    name: String
    year: Int
    semester: String 
    career: String
  }`
  ;

// Definimos los resolvers que procesarán las consultas
const resolvers = {
  Query: {
    hello: () => '¡Hello Word with GraphQL - JS!',
    info: () => ({
      name: 'Christian',
      year: 2024,
      semester: '8vo',
      career: 'Systems Engineering'
    }),
  },
};

// Creamos el servidor Apollo con el esquema y los resolvers
const server = new ApolloServer({ typeDefs, resolvers });

// Iniciamos el servidor en el puerto 4000
server.listen().then(({ url }) => {
  console.log(`Servidor listo en ${url}`);
});