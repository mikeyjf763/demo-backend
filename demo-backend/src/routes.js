"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = void 0;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var ItemsController_1 = require("./controllers/ItemsController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var OrdersController_1 = require("./controllers/OrdersController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var models = {
    "Item": {
        "dataType": "refObject",
        "properties": {
            "_id": { "dataType": "string", "required": true },
            "name": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
            "price": { "dataType": "double", "required": true },
            "image": { "dataType": "string", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OrderItem": {
        "dataType": "refObject",
        "properties": {
            "item": { "ref": "Item", "required": true },
            "quantity": { "dataType": "double", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Cart": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "items": { "dataType": "array", "array": { "dataType": "refObject", "ref": "OrderItem" }, "required": true },
            "total": { "dataType": "double", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
var validationService = new runtime_1.ValidationService(models);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.get.apply(app, __spreadArray(__spreadArray(__spreadArray(['/v1/items'], ((0, runtime_1.fetchMiddlewares)(ItemsController_1.ItemsController)), false), ((0, runtime_1.fetchMiddlewares)(ItemsController_1.ItemsController.prototype.getProducts)), false), [function ItemsController_getProducts(request, response, next) {
            var args = {};
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            var validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
                var controller = new ItemsController_1.ItemsController();
                var promise = controller.getProducts.apply(controller, validatedArgs);
                promiseHandler(controller, promise, response, undefined, next);
            }
            catch (err) {
                return next(err);
            }
        }], false));
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get.apply(app, __spreadArray(__spreadArray(__spreadArray(['/v1/items/:id'], ((0, runtime_1.fetchMiddlewares)(ItemsController_1.ItemsController)), false), ((0, runtime_1.fetchMiddlewares)(ItemsController_1.ItemsController.prototype.getProduct)), false), [function ItemsController_getProduct(request, response, next) {
            var args = {
                id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            var validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
                var controller = new ItemsController_1.ItemsController();
                var promise = controller.getProduct.apply(controller, validatedArgs);
                promiseHandler(controller, promise, response, undefined, next);
            }
            catch (err) {
                return next(err);
            }
        }], false));
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post.apply(app, __spreadArray(__spreadArray(__spreadArray(['/v1/items'], ((0, runtime_1.fetchMiddlewares)(ItemsController_1.ItemsController)), false), ((0, runtime_1.fetchMiddlewares)(ItemsController_1.ItemsController.prototype.addProduct)), false), [function ItemsController_addProduct(request, response, next) {
            var args = {
                newItem: { "in": "body", "name": "newItem", "required": true, "ref": "Item" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            var validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
                var controller = new ItemsController_1.ItemsController();
                var promise = controller.addProduct.apply(controller, validatedArgs);
                promiseHandler(controller, promise, response, undefined, next);
            }
            catch (err) {
                return next(err);
            }
        }], false));
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get.apply(app, __spreadArray(__spreadArray(__spreadArray(['/v1/orders'], ((0, runtime_1.fetchMiddlewares)(OrdersController_1.OrdersController)), false), ((0, runtime_1.fetchMiddlewares)(OrdersController_1.OrdersController.prototype.getOrders)), false), [function OrdersController_getOrders(request, response, next) {
            var args = {};
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            var validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
                var controller = new OrdersController_1.OrdersController();
                var promise = controller.getOrders.apply(controller, validatedArgs);
                promiseHandler(controller, promise, response, undefined, next);
            }
            catch (err) {
                return next(err);
            }
        }], false));
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get.apply(app, __spreadArray(__spreadArray(__spreadArray(['/v1/orders/:orderId'], ((0, runtime_1.fetchMiddlewares)(OrdersController_1.OrdersController)), false), ((0, runtime_1.fetchMiddlewares)(OrdersController_1.OrdersController.prototype.getOrderById)), false), [function OrdersController_getOrderById(request, response, next) {
            var args = {
                orderId: { "in": "path", "name": "orderId", "required": true, "dataType": "string" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            var validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
                var controller = new OrdersController_1.OrdersController();
                var promise = controller.getOrderById.apply(controller, validatedArgs);
                promiseHandler(controller, promise, response, undefined, next);
            }
            catch (err) {
                return next(err);
            }
        }], false));
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post.apply(app, __spreadArray(__spreadArray(__spreadArray(['/v1/orders'], ((0, runtime_1.fetchMiddlewares)(OrdersController_1.OrdersController)), false), ((0, runtime_1.fetchMiddlewares)(OrdersController_1.OrdersController.prototype.createOrder)), false), [function OrdersController_createOrder(request, response, next) {
            var args = {
                newOrder: { "in": "body", "name": "newOrder", "required": true, "ref": "Cart" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            var validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
                var controller = new OrdersController_1.OrdersController();
                var promise = controller.createOrder.apply(controller, validatedArgs);
                promiseHandler(controller, promise, response, undefined, next);
            }
            catch (err) {
                return next(err);
            }
        }], false));
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, response, successStatus, next) {
        return Promise.resolve(promise)
            .then(function (data) {
            var statusCode = successStatus;
            var headers;
            if (isController(controllerObj)) {
                headers = controllerObj.getHeaders();
                statusCode = controllerObj.getStatus() || statusCode;
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            returnHandler(response, statusCode, data, headers);
        })
            .catch(function (error) { return next(error); });
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function returnHandler(response, statusCode, data, headers) {
        if (headers === void 0) { headers = {}; }
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach(function (name) {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            response.status(statusCode || 200);
            data.pipe(response);
        }
        else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        }
        else {
            response.status(statusCode || 204).end();
        }
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function responder(response) {
        return function (status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    }
    ;
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function getValidatedArgs(args, request, response) {
        var fieldErrors = {};
        var values = Object.keys(args).map(function (key) {
            var name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "ignore" });
                case 'queries':
                    return validationService.ValidateParam(args[key], request.query, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "ignore" });
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "ignore" });
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "ignore" });
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "ignore" });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', { "noImplicitAdditionalProperties": "ignore" });
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "ignore" });
                    }
                    else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "ignore" });
                    }
                    else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "ignore" });
                    }
                case 'res':
                    return responder(response);
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new runtime_1.ValidateError(fieldErrors, '');
        }
        return values;
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
exports.RegisterRoutes = RegisterRoutes;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
