import { Request, Response, NextFunction } from "express";
import { getProfileById as getProfileByIdService } from "../../services";
import { getProfileDTO } from "../../utils";

export const getProfileById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const profile = await getProfileByIdService(id);

    const profileDTO = getProfileDTO(profile);

    return res.json(profileDTO);
  } catch (e) {
    next(e);
  }
};
