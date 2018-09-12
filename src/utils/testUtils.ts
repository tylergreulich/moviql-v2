import { graphql } from 'graphql';

import { schema } from '../server/createSchema';

type Options = {
  context?: {
    Movie?: Object;
  };
  variables?: Object;
};

// Nice little helper function for tests
export const request = (
  query?: any,
  mutation?: any,
  { context, variables }: Options = {}
) => graphql(schema, mutation, undefined, variables);
