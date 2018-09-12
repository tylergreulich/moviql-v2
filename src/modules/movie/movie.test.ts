import { gql } from 'apollo-server-express';
import * as mongoose from 'mongoose';
import Movie from '../../models/Movie';
import { request } from '../../utils/testUtils';

import {
  startTestConnection,
  dropTestConnection
} from '../../server/connectToMongoDB';

import { resolvers as movieResolvers } from './resolvers';

describe('movieResolvers', () => {
  beforeEach(() => startTestConnection());

  afterEach(() => dropTestConnection());

  describe('getMovie', () => {
    it('Should return the correct movie with the given ID', async () => {
      const id = mongoose.Types.ObjectId();

      await Movie.create({
        _id: id,
        title: 'Test',
        description: 'Test',
        releaseDate: new Date()
      });

      const result = await movieResolvers.Query.getMovie(
        null,
        { _id: id },
        { Movie }
      );
      expect(result).toMatchObject(result);
    });
  });

  describe('getMovies', () => {
    it('Should return a list of movies', async () => {
      const id = mongoose.Types.ObjectId();

      const movie = await Movie.create([
        {
          _id: id,
          title: 'Test One',
          description: 'Test One',
          releaseDate: new Date()
        },
        {
          _id: new mongoose.Types.ObjectId(),
          title: 'Test Two',
          description: 'Test Two',
          releaseDate: new Date()
        }
      ]);

      const results = await movieResolvers.Query.getMovies(null, {}, { Movie });
      expect(results).toContainEqual(expect.objectContaining(results[0]));
      expect(results).toHaveLength(2);
    });
  });

  describe('addMovie', () => {
    it('Should add a movie and return it', async () => {});
  });
});
