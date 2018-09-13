// tslint:disable
// graphql typescript definitions

export namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface IQuery {
    __typename: 'Query';
    getComment: IComment | null;
    hi: string;
    getMovies: Array<IMovie>;
    getMovie: IMovie | null;
    bye: string;
    getCurrentUser: IUser | null;
    getAllUsers: Array<IUser>;
  }

  interface IGetCommentOnQueryArguments {
    _id: string;
  }

  interface IGetMovieOnQueryArguments {
    _id: string;
  }

  interface IGetCurrentUserOnQueryArguments {
    _id: string;
  }

  interface IComment {
    __typename: 'Comment';
    _id: string;
    username: string | null;
    createdAt: string;
    movieReview: string;
    movieRating: number;
  }

  interface IMovie {
    __typename: 'Movie';
    _id: string;
    title: string;
    description: string;
    releaseDate: string;
    movieImage: string;
    rating: number | null;

    /**
     * # rating will be done via math operation from movieRating via comments
     * # find average rating from movieRating divided by # of movieReviews
     */
    cast: Array<IActor>;

    /**
     * # for the client => just make each cast member a chip component
     * # have an input field below existing cast for adding new members
     * # update with optomistic UI
     */
    comments: Array<IComment>;
  }

  interface IActor {
    __typename: 'Actor';
    _id: string;
    name: string;
  }

  interface IUser {
    __typename: 'User';
    _id: string;
    email: string;
    username: string;
    favorites: Array<IMovie>;
    isAdmin: boolean | null;
  }

  interface IMutation {
    __typename: 'Mutation';
    addActor: IMovie | null;
    deleteActor: IMovie | null;
    addComment: IMovie;
    loginUser: IToken | null;
    addMovie: IMovie;
    editMovie: IMovie;
    addMovieToFavorites: boolean;
    registerUser: IToken | null;
  }

  interface IAddActorOnMutationArguments {
    _id: string;
    name: string;
  }

  interface IDeleteActorOnMutationArguments {
    _id: string;
  }

  interface IAddCommentOnMutationArguments {
    _id: string;
    createdAt?: string | null;
    movieReview: string;
    movieRating: number;
  }

  interface ILoginUserOnMutationArguments {
    email: string;
    password: string;
  }

  interface IAddMovieOnMutationArguments {
    title: string;
    description: string;
    releaseDate?: string | null;
    movieImage: string;
  }

  interface IEditMovieOnMutationArguments {
    _id: string;
    title?: string | null;
    description?: string | null;
    releaseDate?: string | null;
  }

  interface IAddMovieToFavoritesOnMutationArguments {
    _id: string;
    username: string;
  }

  interface IRegisterUserOnMutationArguments {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    isAdmin?: boolean | null;
  }

  interface IToken {
    __typename: 'Token';
    token: string;
  }
}

// tslint:enable
