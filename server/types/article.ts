import { ObjectId } from "mongodb";
import { BlockModel, CommentModel, RatingModel } from "../models/Article";

export enum ArticleTypeEnum {
  ALL = "ALL",
  IT = "IT",
  SCIENCE = "SCIENCE",
  ECONOMICS = "ECONOMICS",
}

export enum BlockTypeEnum {
  TEXT = "TEXT",
  CODE = "CODE",
  IMAGE = "IMAGE",
}

export enum RatingActionEnum {
  LIKE = "LIKE",
  DISLIKE = "DISLIKE",
}

export type TextBlock = {
  type: BlockTypeEnum.TEXT;
  title: string;
  paragraphs: string[];
};

export type CodeBlock = {
  type: BlockTypeEnum.CODE;
  code: string;
};

export type ImageBlock = {
  type: BlockTypeEnum.IMAGE;
  src: string;
  title: string;
};

export type Comment = {
  text: string;
  profileId: ObjectId;
};

export type RatedProfiles = {
  profileId: ObjectId;
  action: RatingActionEnum;
};

export type Rating = {
  rating: number;
  ratedProfiles: RatedProfiles[];
};

export type Article = {
  title: string;
  subtitle?: string;
  image?: string;
  views: number;
  createdAt: Date;
  profileId: ObjectId;
  type: ArticleTypeEnum[];
  blocks: InstanceType<typeof BlockModel>[];
  comments: InstanceType<typeof CommentModel>[];
  rating: InstanceType<typeof RatingModel>;
};
