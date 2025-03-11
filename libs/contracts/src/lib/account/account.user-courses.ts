// eslint-disable-next-line @typescript-eslint/no-namespace
import { IsEmail, IsString } from 'class-validator';
import { iUser, IUserCourses } from '@purple/interfaces';

export namespace AccountUserCourses {
  export const topic = 'account.user-courses.query';

  export class Request {
    @IsString()
    id: string;
  }
  export class Response {
    courses: IUserCourses[];
  }
}
