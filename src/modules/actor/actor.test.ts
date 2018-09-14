import {
  startTestConnection,
  dropTestConnection
} from './../../server/connectToMongoDB';
import * as mongoose from 'mongoose';
import Movie from '../../models/Movie';
import Actor from '../../models/Actor';

import { resolvers as actorResolvers } from './resolvers';
import { resolvers as movieResolvers } from '../movie/resolvers';

describe('actorResolvers', () => {
  beforeEach(() => startTestConnection());

  afterEach(() => dropTestConnection());

  describe('addActor', () => {
    it('Should add an actor to the list of cast members in a movie', async () => {
      const _id = mongoose.Types.ObjectId();

      const movie = await Movie.create({
        _id,
        title: 'Random title',
        description: 'This is a random description for this movie',
        movieImage: 'aoiergheruihuri'
      });

      const actor = { name: 'New Name' };

      const addActor = await actorResolvers.Mutation.addActor(
        null,
        { _id, name: actor.name },
        { Actor, Movie }
      );

      const results = await movieResolvers.Query.getMovie(
        null,
        { _id },
        { Movie }
      );

      expect(results.cast).toHaveLength(1);
    });
  });
});
