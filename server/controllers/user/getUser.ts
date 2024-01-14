import { Request, Response, NextFunction } from "express";
import {
  getProfileById as getProfileByIdService,
  getUserById as getUserByIdService,
} from "../../services";
import { getProfileDTO, getUserDTO } from "../../utils";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      user: { _id: userId },
    } = req.body;

    const { _expand } = req.query;

    const user = await getUserByIdService(userId);

    let profile = null;

    if (_expand === "profile") {
      profile = await getProfileByIdService(user.profile);
    }

    const userDTO = getUserDTO(user);
    const profileDTO = getProfileDTO(profile);

    return res.json({ ...userDTO, ...(!!profile && { profile: profileDTO }) });
  } catch (e) {
    next(e);
  }
};
