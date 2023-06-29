import express from "express";
const wordListController = require("../controllers/wordListController");

const router = express.Router();

router.route("/").get(wordListController.getWordList);
router.route("/used").get(wordListController.getUsedWordList);
router.route("/word-of-the-day").get(wordListController.getRandomWord);

router.route("/").post(wordListController.createWord);
router.route("/:id").patch(wordListController.updateWord);

module.exports = router;
