import { IActor } from './Actor.interface';
import { IComment } from './Comment.interface';

export interface IMovie {
  _id: string;
  title: string;
  description: string;
  movieImage: string;
  releaseDate?: Date;
  rating?: number;
  cast?: [IActor];
  likes?: number;
  comments?: [IComment];
  onClick?: () => void;
}
