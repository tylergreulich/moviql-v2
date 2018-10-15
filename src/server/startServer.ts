import * as mongoose from 'mongoose';
import { ApolloServer, gql } from 'apollo-server-express';
import User from '../modules/user/user.model';
import Movie from '../modules/movie/movie.model';
import Comment from '../modules/comment/comment.model';
import { schema } from './createSchema';
import { searchOriginalError } from '../utils/searchOriginalError';
import { app } from './serverMiddleware';
import { connectToMongoDB } from './connectToMongoDB';

connectToMongoDB();

export const startServer = () => {
  const server = new ApolloServer({
    schema,
    context: ({ req: { currentUser } }) => ({
      User,
      Movie,
      Comment,
      currentUser
    }),
    // Resolves error directory when using mergeSchemas()
    // mergeSchemas() ends up swallowing the error object before it's thrown
    formatError: error => searchOriginalError(error)
  });

  server.applyMiddleware({ app });

  const port = process.env.PORT || 4000;

  app.listen(port, () =>
    console.log(`Server listening at localhost:${port}${server.graphqlPath}`)
  );

  return app;
};
