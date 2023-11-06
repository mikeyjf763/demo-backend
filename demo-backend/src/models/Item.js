"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemModel = void 0;
var mongoose_1 = require("mongoose");
var ItemSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
});
exports.ItemModel = mongoose_1.default.model('Item', ItemSchema);
