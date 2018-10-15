import { Document } from 'mongoose';
import { Actor } from '../actor/actor.interface';
import { Comment } from '../comment/comment.interface';

export interface Movie extends Document {
  _id: string;
  title: string;
  description: string;
  movieImage: string;
  releaseDate: Date;
  rating?: Number;
  cast?: [Actor];
  comments?: [Comment];
}

export interface MovieErrors {
  title?: string;
  description?: string;
  movieImage?: string;
  releaseDate?: Date;
}
