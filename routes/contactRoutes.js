import express from "express";
import ContactController from "../controllers/contactController.js";

const router = express.Router();

router.post("/", ContactController.createMessage);
router.get("/", ContactController.getMessages);
router.delete("/:id", ContactController.deleteMessage);
router.patch("/contact/:id/archive", ContactController.toggleArchiveMessage)

export default router;
