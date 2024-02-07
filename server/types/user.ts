import { ObjectId } from "mongodb";

export enum UserRoleEnum {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type Notification = {
  _id: ObjectId;
  title: string;
  profileId: ObjectId;
  description?: string;
  href?: string;
};

export type User = {
  passwordHash: string;
  email: string;
  profile: ObjectId;
  roles?: UserRoleEnum[];
  features?: Record<string, boolean>;
  jsonSettings?: Record<string, any>;
  notifications: Notification[];
};
