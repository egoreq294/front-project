import { Router } from "express";
import { body } from "express-validator";
import {
  register,
  login,
  logout,
  refresh,
  getUser,
  updateUser,
  getProfileById,
  updateProfile,
} from "../controllers";
import { authMiddleware } from "../middlewares/authMiddleware";

export const router = Router();

router.post(
  "/register",
  body("email").isEmail(),
  body("password").isLength({ min: 8, max: 32 }),
  register
);
router.post("/login", login);
router.post("/logout", logout);
router.get("/refresh", refresh);
router.get("/user", authMiddleware, getUser);
router.patch("/user", authMiddleware, updateUser);
router.get("/profile/:id", getProfileById);
router.put("/profile", authMiddleware, updateProfile);
