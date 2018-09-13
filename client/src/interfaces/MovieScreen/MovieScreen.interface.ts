import { IComment } from './../shared/Comment.interface';
import { IActor } from './../shared/Actor.interface';

export interface GetMovieData {
  _id: string;
  title: string;
  description: string;
  movieImage: string;
  releaseDate?: Date;
  cast?: [IActor];
  comments?: [IComment];
}

export interface GetMovieVariables {
  _id: string;
}
