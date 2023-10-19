"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const todaysWordSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxlength: 6,
        minlength: 6,
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
const TodaysWord = mongoose_1.default.model("TodaysWord", todaysWordSchema, "todaysWord");
module.exports = TodaysWord;
//# sourceMappingURL=todaysWordModel.js.map