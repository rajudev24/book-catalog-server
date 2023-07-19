"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const book_validation_1 = require("./book.validation");
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post("/create-book", (0, validateRequest_1.default)(book_validation_1.BookValidations.createBookZodSchema), book_controller_1.BookController.createBook);
router.post("/review/:id", book_controller_1.BookController.createReview);
router.get("/get-book", book_controller_1.BookController.getAllBook);
router.get("/get-book/:id", book_controller_1.BookController.getSingleBook);
router.patch("/:id", (0, validateRequest_1.default)(book_validation_1.BookValidations.updateBookZodSchema), book_controller_1.BookController.updateSingleBook);
router.delete("/delete-book/:id", book_controller_1.BookController.deleteSingleBook);
exports.BookRoutes = router;
