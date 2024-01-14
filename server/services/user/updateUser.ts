import { ApiError } from "../../exceptions";
import { UserModel } from "../../models/User";

type UpdateUserArgs = {
  id: string;
  email?: string;
  username?: string;
  avatar?: string;
  features: Record<string, string>;
  jsonSettings: Record<string, string>;
};

export const updateUser = async ({ id, ...restFields }: UpdateUserArgs) => {
  const filter = { _id: id };
  const user = await UserModel.findOneAndUpdate(filter, restFields, {
    new: true,
  });

  if (!user) {
    throw ApiError.BadRequest("Произошла непредвиденная ошибка");
  }

  return user;
};
