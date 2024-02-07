import { Request, Response, NextFunction } from "express";
import {
  updateProfile as updateProfileService,
  getUserById as getUserByIdService,
} from "../../services";
import { getProfileDTO } from "../../utils";

export const updateProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      user: { _id: userId },
      firstName,
      lastName,
      avatar,
      age,
      country,
      city,
      currency,
    } = req.body;

    const user = await getUserByIdService(userId);

    const updatedProfile = await updateProfileService({
      id: user.profile,
      firstName,
      lastName,
      avatar,
      age,
      country,
      city,
      currency,
    });

    const profileDTO = getProfileDTO(updatedProfile);

    return res.json(profileDTO);
  } catch (e) {
    next(e);
  }
};
