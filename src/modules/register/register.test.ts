import { User } from './../../interfaces/auth.interface';
import { schema } from './../../server/createSchema';
import {
  startTestConnection,
  dropTestConnection
} from './../../server/connectToMongoDB';
import { gql } from 'apollo-server-express';
import request from 'supertest';

const url = 'http://localhost:4000/';
const fakeApiRequest = request(url);

const u = '';
const e = '';
const p = '';
const cP = '';

const registerMutation = gql`
  mutation RegisterUser($username: String!, email: String!, password: String!, confirmPassword: String!) {
    registerUser(username: ${u}, email: ${e}, password: ${p}, confirmPassword: ${cP}) {
      token
    }
  }
`;

describe('loginResolver', () => {
  beforeEach(() => startTestConnection());

  afterEach(() => dropTestConnection());

  describe('loginUser', () => {
    it('Should register a user', async () => {
      const results = await fakeApiRequest
        .post('/graphql')
        .send({ mutation: registerMutation });
      expect(results).toBe(400);
    });
  });
});
