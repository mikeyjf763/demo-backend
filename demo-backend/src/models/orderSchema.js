"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
var mongoose_1 = require("mongoose");
var CartSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    items: [{
            item: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Item' },
            quantity: { type: Number, required: true }
        }],
    total: { type: Number, required: true },
});
exports.OrderModel = mongoose_1.default.model('Cart', CartSchema);
