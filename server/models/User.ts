import { Schema, model } from "mongoose";
import { User } from "../types/user";

const UserSchema = new Schema<User>({
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, unique: true, required: true },
  profile: { type: Schema.Types.ObjectId, ref: "Profile" },
  roles: {
    type: [String],
    enum: ["ADMIN", "USER"],
  },
  features: {
    type: Map,
    of: Boolean,
  },
  jsonSettings: {
    type: Map,
    of: Schema.Types.Mixed,
  },
});

export const UserModel = model("User", UserSchema);
