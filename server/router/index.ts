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
  createArticle,
  getArticleById,
  getArticles,
  rateArticleById,
} from "../controllers";
import { authMiddleware } from "../middlewares/authMiddleware";

export const router = Router();

// user
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

// profile
router.get("/profile/:id", getProfileById);
router.put("/profile", authMiddleware, updateProfile);

// article
router.post("/article", authMiddleware, createArticle);
router.get("/article/:id", authMiddleware, getArticleById);
router.get("/article", authMiddleware, getArticles);
router.post("/article/rate", authMiddleware, rateArticleById);
