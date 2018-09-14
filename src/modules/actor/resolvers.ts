import Actor from './../../models/Actor';
import Movie from './../../models/Movie';
import { ResolverMap } from '../../types/graphql-utils';
import { GQL } from '../../types/schema';

export const resolvers: ResolverMap = {
  Mutation: {
    addActor: async (
      _,
      { _id, name }: GQL.IAddActorOnMutationArguments,
      { Actor, Movie }
    ) => {
      const newActor = new Actor({ name });

      const movie = await Movie.findByIdAndUpdate(
        { _id },
        {
          $addToSet: {
            cast: newActor
          }
        }
      );

      newActor.save();

      return movie;
    },
    deleteActor: async (
      _,
      { movieId, actorId }: GQL.IDeleteActorOnMutationArguments,
      { Actor }
    ) => {
      const actor = await Actor.findByIdAndRemove({ actorId });

      const movie = await Movie.findByIdAndUpdate(
        { movieId },
        {
          $pull: {
            cast: actorId
          }
        }
      );

      movie.save();

      return actor;
    }
  }
};
