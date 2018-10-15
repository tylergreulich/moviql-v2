import { Document } from 'mongoose';
import { Response } from 'express';

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface AuthErrors {
  username?: string;
  email?: string;
  password?: string;
}
