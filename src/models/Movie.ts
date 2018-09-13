import { Schema, model } from 'mongoose';
import { Movie } from '../interfaces/movie.interface';

const MovieSchema: Schema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rating: {
    type: Number
  },
  releaseDate: {
    type: String
  },
  movieImage: {
    type: String,
    required: true
  },
  cast: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Actor'
    }
  ],
  comments: {
    type: [Schema.Types.ObjectId],
    ref: 'Comment'
  }
});

// This has to do with the search component
MovieSchema.index({
  '$**': 'text'
});

export default model<Movie>('Movie', MovieSchema);
