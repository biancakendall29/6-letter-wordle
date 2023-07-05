import mongoose from "mongoose";

const todaysWordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxlength: 6,
      minlength: 6,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const TodaysWord = mongoose.model("TodaysWord", todaysWordSchema, "todaysWord");

module.exports = TodaysWord;
