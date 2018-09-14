import { validateComment } from '../../validation/comment';
import { UserInputError } from 'apollo-server-core';
import { GQL } from '../../types/schema';
import { ResolverMap } from '../../types/graphql-utils';

export const resolvers: ResolverMap = {
  Query: {
    getComment: async (_, { _id }, { Comment }) =>
      await Comment.findById({ _id })
  },
  Mutation: {
    addComment: async (
      _,
      { _id, movieReview, movieRating }: GQL.IAddCommentOnMutationArguments,
      { Movie, Comment }
    ) => {
      const newComment = new Comment({
        movieReview,
        movieRating,
        createdAt: new Date()
      });

      const movie = await Movie.findByIdAndUpdate(
        { _id },
        {
          $addToSet: {
            comments: newComment
          }
        }
      );

      newComment.save();

      return movie;
    }
  }
};
