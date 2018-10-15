import User from '../modules/user/user.model';
import Movie from '../modules/movie/movie.model';

export interface ResolverMap {
  [key: string]: {
    [key: string]: (parent: any, args: any, context: any, info?: any) => any;
  };
}
