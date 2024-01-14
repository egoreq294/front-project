import { Schema, model } from "mongoose";
import { Profile } from "../types/profile";

const ProfileSchema = new Schema<Profile>({
  firstName: { type: String },
  lastName: { type: String },
  avatar: { type: String },
  age: { type: String },
  country: {
    type: String,
    enum: ["RUSSIA", "UNITED_STATES"],
  },
  city: { type: String },
  currency: {
    type: String,
    enum: ["RUB", "USD", "EUR"],
  },
});

export const ProfileModel = model("Profile", ProfileSchema);
