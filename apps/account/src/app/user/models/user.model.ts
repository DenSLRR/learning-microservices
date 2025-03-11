import {
  iUser,
  IUserCourses,
  PurchaseState,
  UserRole,
} from '@purple/interfaces';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, Types } from 'mongoose';

@Schema()
export class UserCourses extends Document implements IUserCourses {
  @Prop({ required: true })
  courseId: string;

  @Prop({ required: true, enum: PurchaseState, type: String })
  purchaseState: PurchaseState;
}

export const userCourseSchema = SchemaFactory.createForClass(UserCourses);

@Schema()
//@ts-ignore
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

  @Prop({ type: [userCourseSchema], _id: false })
  courses: Types.Array<UserCourses>;
}

export const userSchema = SchemaFactory.createForClass(User);
