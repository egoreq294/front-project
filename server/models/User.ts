import { Schema, model } from "mongoose";
import { User } from "../types/user";

const UserSchema = new Schema<User>({
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, unique: true, required: true },
});

export const UserModel = model("User", UserSchema);
