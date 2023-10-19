"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wordListController = require("../controllers/wordListController");
const router = express_1.default.Router();
router.route("/").get(wordListController.getWordList);
router.route("/used").get(wordListController.getUsedWordList);
// router.route("/word-of-the-day").get(wordListController.getRandomWord);
router.route("/").post(wordListController.createWord);
router.route("/:id").patch(wordListController.updateWord);
module.exports = router;
//# sourceMappingURL=wordRoutes.js.map