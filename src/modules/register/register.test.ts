import { startServer } from './../../server/startServer';
import { User } from './../../interfaces/auth.interface';
import { schema } from './../../server/createSchema';
import {
  startTestConnection,
  dropTestConnection
} from './../../server/connectToMongoDB';
import { gql, UserInputError } from 'apollo-server-express';
import { request } from 'graphql-request';

const username = 'bob';
const email = 'bob@bob.com';
const password = 'bobbob';
const confirmPassword = 'bobbob';

const mutation = (u: string, e: string, p: string, cP: string) => `
mutation {
  registerUser(username: "${u}", email: "${e}", password: "${p}", confirmPassword: "${cP}") {
    token
  }
}
`;

describe('loginResolver', () => {
  beforeEach(() => startTestConnection());

  afterEach(() => dropTestConnection());

  describe('registerUser', () => {
    it('Should register a user', async () => {
      const { registerUser } = await request(
        'http://localhost:4000/graphql',
        mutation(username, email, password, confirmPassword)
      );

      expect(registerUser).not.toBeUndefined();
      expect(typeof 'registerUser.token').toBe('string');
    });
  });
});
