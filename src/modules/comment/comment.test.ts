import { gql } from 'apollo-server-express';
import * as mongoose from 'mongoose';
import Comment from '../../models/Comment';
import Movie from '../../models/Movie';
import { request } from '../../utils/testUtils';

import {
  startTestConnection,
  dropTestConnection
} from '../../server/connectToMongoDB';

import { resolvers as commentResolvers } from './resolvers';
import { resolvers as movieResolvers } from '../movie/resolvers';

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
    it('Should add a comment to a movie and return the movie', async () => {
      const _id = mongoose.Types.ObjectId();

      const movie = await Movie.create({
        _id,
        title: 'Testing the addComment feature',
        description: 'Testing the addComment feature description',
        movieImage: 'aeriogeruiogheruier'
      });

      const commentArgs = {
        movieReview: 'Testing the addComment movieReview',
        movieRating: 0
      };

      const addComment = await commentResolvers.Mutation.addComment(
        null,
        {
          _id,
          movieReview: commentArgs.movieReview,
          movieRating: commentArgs.movieRating
        },
        { Movie, Comment }
      );

      const getAddCommentResults = await movieResolvers.Query.getMovie(
        null,
        { _id },
        { Movie }
      );

      expect(getAddCommentResults.comments).toHaveLength(1);
    });
  });
});
