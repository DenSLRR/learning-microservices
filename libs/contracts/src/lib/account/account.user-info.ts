// eslint-disable-next-line @typescript-eslint/no-namespace
import { IsString } from 'class-validator';
import { iUser } from '@purple/interfaces';

export namespace AccountUserInfo {
  export const topic = 'account.user-info.query';

  export class Request {
    @IsString()
    id: string;
  }
  export class Response {
    user: Omit<iUser, 'passwordHash'>;
  }
}
