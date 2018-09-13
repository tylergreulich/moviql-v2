import { Document } from 'mongoose';
import { Actor } from './actor.interface';
import { Comment } from './comment.interface';

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
