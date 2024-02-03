import { ObjectId } from "mongodb";

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
  _id: ObjectId;
  type: BlockTypeEnum.TEXT;
  title: string;
  paragraphs: string[];
};

export type CodeBlock = {
  _id: ObjectId;
  type: BlockTypeEnum.CODE;
  code: string;
};

export type ImageBlock = {
  _id: ObjectId;
  type: BlockTypeEnum.IMAGE;
  src: string;
  title: string;
};

export type Block = TextBlock | CodeBlock | ImageBlock;

export type Comment = {
  text: string;
  profileId: ObjectId;
  articleId: ObjectId;
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
  blocks: Block[];
  rating: Rating;
};
