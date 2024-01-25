import { Schema, model } from "mongoose";
import {
  Article,
  CodeBlock,
  ImageBlock,
  TextBlock,
  Comment,
  Rating,
  RatedProfiles,
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

const RatedProfiles = new Schema<RatedProfiles>({
  profileId: { type: Schema.Types.ObjectId, ref: "Profile" },
  action: { type: String, enum: ["LIKE", "DISLIKE"] },
});

const RatingSchema = new Schema<Rating>({
  rating: { type: Number },
  ratedProfiles: { type: [RatedProfiles], required: true },
});

const ArticleSchema = new Schema<Article>({
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
  rating: { type: RatingSchema, required: true },
});

ArticleSchema.index({ "$**": "text" });

export const ArticleModel = model("Article", ArticleSchema);
export const CommentModel = model("Comment", CommentSchema);
export const BlockModel = model("Block", BlockSchema);
export const RatingModel = model("Rating", RatingSchema);
