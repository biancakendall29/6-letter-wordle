import express from "express";
const todaysWordController = require("../controllers/todaysWordController");

const router = express.Router();

router.route("/").get(todaysWordController.getTodaysWord);
router.route("/:id").patch(todaysWordController.updateTodaysWord);

module.exports = router;
