import { IMovie } from './../shared/Movie.interface';
export interface GetAllMovieData {
  _id: string;
  movieImage: string;
  getMovies: [IMovie];
}
