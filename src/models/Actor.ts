import { Schema, model } from 'mongoose';
import { Actor } from '../interfaces/actor.interface';

const ActorSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  }
});

export default model<Actor>('Actor', ActorSchema);
