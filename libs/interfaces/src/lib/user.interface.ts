export enum UserRole {
  Teacher,
  Student,
}

export enum PurchaseState {
  Started = 'Started',
  WaitingForPayment = 'WaitingForPayment',
  Purchased = 'Purchased',
  Canceled = 'Canceled',
}

export interface iUser {
  _id?: string;
  displayName?: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  courses?: IUserCourses[];
}

export interface IUserCourses {
  _id?: string;
  courseId: string;
  purchaseState: PurchaseState;
}
