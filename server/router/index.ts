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
  addCommentByArticleId,
  getCommentsByArticleId,
  getNotifications,
  createNotification,
  deleteNotificationById,
  updateArticle,
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
router.get("/user/notifications", authMiddleware, getNotifications);
router.post("/user/notifications/create", authMiddleware, createNotification);
router.delete("/user/notifications", authMiddleware, deleteNotificationById);

// profile
router.get("/profiles/:id", getProfileById);
router.put("/profiles/update", authMiddleware, updateProfile);

// article
router.get("/articles/:id", authMiddleware, getArticleById);
router.get("/articles", authMiddleware, getArticles);
router.get("/articles/:id/comments", authMiddleware, getCommentsByArticleId);
router.post("/articles/create", authMiddleware, createArticle);
router.post("/articles/rate", authMiddleware, rateArticleById);
router.post("/articles/add-comment", authMiddleware, addCommentByArticleId);
router.put("/articles/update", authMiddleware, updateArticle);
