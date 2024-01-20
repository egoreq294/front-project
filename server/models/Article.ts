import { Schema, model } from "mongoose";
import {
  Article,
  CodeBlock,
  ImageBlock,
  TextBlock,
  Comment,
} from "../types/article";

const BlockSchema = new Schema<TextBlock | CodeBlock | ImageBlock>({
  type: { type: String, enum: ["TEXT", "CODE", "IMAGE"] },
  title: { type: String },
  paragraphs: { type: [String], default: undefined },
  code: { type: String },
  src: { type: String },
});

const CommentSchema = new Schema<Comment>({
  text: { type: String },
  profileId: { type: Schema.Types.ObjectId, ref: "Profile" },
});

const ArticleSchema = new Schema<Article>(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    image: { type: String },
    views: { type: Number, required: true },
    createdAt: { type: Date, required: true },
    profileId: { type: Schema.Types.ObjectId, ref: "Profile", required: true },
    type: {
      type: [String],
      enum: ["IT", "SCIENCE"],
      required: true,
    },
    blocks: { type: [BlockSchema], required: true },
    comments: { type: [CommentSchema], required: true },
    rating: { type: Number, required: true },
  },
  { timestamps: true }
);

ArticleSchema.index({ "$**": "text" });

export const ArticleModel = model("Article", ArticleSchema);
export const CommentModel = model("Comment", CommentSchema);
export const BlockModel = model("Block", BlockSchema);
