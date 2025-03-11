import { iUser, UserRole } from '@purple/interfaces';

import bcrypt from 'bcryptjs';

export class UserEntity implements iUser {
  _id?: string;
  displayName: string;
  passwordHash: string;
  email: string;
  role: UserRole;

  constructor(user: iUser) {
    this._id = user._id;
    this.passwordHash = user.passwordHash;
    this.displayName = user.displayName;
    this.email = user.email;
    this.role = user.role;
  }
  public async setPassword(password: string) {
    const salt = await bcrypt.genSalt(10);

    this.passwordHash = await bcrypt.hash(password, salt);

    return this;
  }

  public validatePassword(password: string) {
    return bcrypt.compare(password, this.passwordHash);
  }
}
