import { Schema, model } from "mongoose";
import { User, Notification } from "../types/user";

const NotificationSchema = new Schema<Notification>({
  title: { type: String, required: true },
  description: { type: String },
  profileId: { type: Schema.Types.ObjectId, ref: "Profile" },
  href: { type: String },
});

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
  notifications: { type: [NotificationSchema], default: [] },
});

export const UserModel = model("User", UserSchema);
