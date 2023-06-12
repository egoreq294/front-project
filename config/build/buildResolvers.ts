import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export const buildResolvers = ({ alias }: BuildOptions): ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias,
  };
};
