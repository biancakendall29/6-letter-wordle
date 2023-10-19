"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const wordSchema = new mongoose_1.default.Schema({
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
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
const Word = mongoose_1.default.model("Word", wordSchema);
module.exports = Word;
//# sourceMappingURL=wordModel.js.map