import express from "express";
import { updateWord } from "..//controllers/wordListController";
import { createWord } from "..//controllers/wordListController";
import { getUsedWordList } from "../controllers/wordListController";
import { getWordList } from "../controllers/wordListController";

const router = express.Router();

router.route("/").get(getWordList);
router.route("/used").get(getUsedWordList);

router.route("/").post(createWord);
router.route("/:id").patch(updateWord);

export default router;
