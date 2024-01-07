import { ObjectId } from "mongodb";
import { User } from "./user";

export type Token = {
  refreshToken: string;
  user: User;
};

export type TokenPayload = {
  _id: ObjectId;
};
