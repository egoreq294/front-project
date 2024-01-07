import { Router } from "express";
import { body } from "express-validator";
import {
  getUsers,
  register,
  login,
  logout,
  refresh,
  getUserById,
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
router.post("/refresh", refresh);
router.get("/users", authMiddleware, getUsers);
router.get("/user/:id", authMiddleware, getUserById);
