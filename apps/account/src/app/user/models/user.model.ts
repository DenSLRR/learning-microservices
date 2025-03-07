import { iUser, UserRole } from '@purple/interfaces';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export { Document } from 'mongoose';

@Schema()
export class User extends Document implements iUser {
  @Prop()
  displayName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string;

  @Prop({
    required: true,
    enum: UserRole,
    type: String,
    default: UserRole.Student,
  })
  role: UserRole;
}

export const userSchema = SchemaFactory.createForClass(User);
