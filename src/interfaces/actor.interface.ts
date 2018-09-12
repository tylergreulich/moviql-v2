import { Document } from 'mongoose';

export interface Actor extends Document {
  _id: string;
  name: string;
}
