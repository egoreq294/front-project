import { removeToken } from "../token";

export const logout = async (refreshToken: string) => {
  const token = await removeToken(refreshToken);
  return token;
};
