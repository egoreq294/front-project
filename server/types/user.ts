import { ObjectId } from "mongodb";
import { Profile } from "./profile";

export enum UserRoleEnum {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type User = {
  passwordHash: string;
  email: string;
  profile: ObjectId;
  roles?: UserRoleEnum[];
  features?: Record<string, boolean>;
  jsonSettings?: Record<string, any>;
};
