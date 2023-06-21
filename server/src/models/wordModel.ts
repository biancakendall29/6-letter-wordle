import mongoose from "mongoose";

const wordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxlength: 6,
      minlength: 6,
    },
    used: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Word = mongoose.model("Word", wordSchema);

module.exports = Word;
