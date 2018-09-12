import { gql } from 'apollo-server-express';
import * as mongoose from 'mongoose';
import Comment from '../../models/Comment';
import { request } from '../../utils/testUtils';

import {
  startTestConnection,
  dropTestConnection
} from '../../server/connectToMongoDB';

import { resolvers as commentResolvers } from './resolvers';

describe('commentResolvers', () => {
  beforeEach(() => startTestConnection());

  afterEach(() => dropTestConnection());

  describe('getComment', () => {
    it('Should return the correct comment with the given ID', async () => {
      const id = mongoose.Types.ObjectId();

      await Comment.create({
        _id: id,
        movieReview: 'This is a dummy review',
        movieRating: 0,
        createdAt: new Date()
      });

      const result = await commentResolvers.Query.getComment(
        null,
        { _id: id },
        { Comment }
      );
      expect(result).toMatchObject(result);
    });
  });

  describe('addComment', () => {
    it('Should add a comment to a movie and return the movie', async () => {});
  });
});
