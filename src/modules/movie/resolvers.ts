import { GQL } from '../../types/schema';
import { ResolverMap } from '../../types/graphql-utils';
import { validateMovieMutation } from '../../validation/movie';

export const resolvers: ResolverMap = {
  Query: {
    getMovies: async (_, {}, { Movie }) => {
      const movies = await Movie.find();
      return movies;
    },
    getMovie: async (_, { _id }: GQL.IGetMovieOnQueryArguments, { Movie }) => {
      const movie = await Movie.findById({ _id }).populate({
        path: 'comments'
      });
      return movie;
    }
  },
  Mutation: {
    addMovie: async (root, args, { Movie }) => {
      await validateMovieMutation(args);

      const { title, description, movieImage } = args;

      const newMovie = await new Movie({
        title,
        description,
        movieImage
      }).save();

      return newMovie;
    },
    editMovie: async (root, args, { Movie }) => {
      const { _id } = args;

      try {
        const movie = await Movie.findByIdAndUpdate(
          { _id },
          {
            $set: {
              ...args
            }
          },
          { new: true }
        );

        await movie.save();

        return movie;
      } catch (error) {
        console.log(error);
      }
    },
    addMovieToFavorites: async (_, { _id, username }, { Movie, User }) => {
      const user = await User.findOneAndUpdate(
        { username },
        {
          $addToSet: {
            favorites: _id
          }
        }
      );

      return user;
    }
  }
};
