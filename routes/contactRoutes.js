import express from "express";
import ContactController from "../controllers/contactController.js";

const router = express.Router();

router.post("/", ContactController.createMessage);
router.get("/", ContactController.getMessages);
router.delete("/:id", ContactController.deleteMessage);
router.patch("/:id/archive", ContactController.toggleArchive)

export default router;
