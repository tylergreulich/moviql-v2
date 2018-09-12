import User from '../models/User';
import Movie from '../models/Movie';

export interface ResolverMap {
  [key: string]: {
    [key: string]: (parent: any, args: any, context: any, info?: any) => any;
  };
}
