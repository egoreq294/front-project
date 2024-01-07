import { Schema, model } from "mongoose";
import { Token } from "../types/token";

const TokenSchema = new Schema<Token>({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  refreshToken: { type: String, required: true },
});

export const TokenModel = model("Token", TokenSchema);
