import { ObjectId } from "mongodb";
import {
  BlockTypeEnum,
  CodeBlock,
  ImageBlock,
  TextBlock,
} from "../../types/article";
import { ArticleModel } from "../../models/Article";

export type BlocksDTO = (TextBlock | CodeBlock | ImageBlock) & {
  id: ObjectId;
};

export const getBlocksDTO = (
  articleModel: InstanceType<typeof ArticleModel>
): Array<BlocksDTO> => {
  const blocks = articleModel.blocks.map((item) => {
    if (item.type === BlockTypeEnum.CODE) {
      return {
        id: item._id,
        code: item.code,
        type: item.type,
      };
    }

    if (item.type === BlockTypeEnum.IMAGE) {
      return {
        id: item._id,
        src: item.src,
        type: item.type,
        title: item.title,
      };
    }

    if (item.type === BlockTypeEnum.TEXT) {
      return {
        id: item._id,
        title: item.title,
        paragraphs: item.paragraphs,
        type: item.type,
      };
    }
  });

  const blocksDTO = blocks.filter((item) => item !== null) as BlocksDTO[];

  return blocksDTO;
};
