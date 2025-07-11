import express from "express";
import comissionUpload from "../middleware/comissionUpload.js";
import ComissionController from "../controllers/comissionController.js";

const router = express.Router();

router.post(
    "/",
    comissionUpload.single("portraitImage"),
    ComissionController.createComission
);

router.get("/",ComissionController.getAllComissions);

export default router;