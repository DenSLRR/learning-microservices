export enum UserRole {
  Teacher,
  Student,
}

export interface iUser {
  _id?: string;
  displayName: string;
  email: string;
  passwordHash: string;
  role: UserRole;
}
