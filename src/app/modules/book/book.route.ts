import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BookValidations } from "./book.validation";
import { BookController } from "./book.controller";

const router = express.Router();

router.post(
  "/create-book",
  validateRequest(BookValidations.createBookZodSchema),
  BookController.createBook
);
router.post("/review/:id", BookController.createReview);

router.get("/get-book", BookController.getAllBook);
router.get("/get-book/:id", BookController.getSingleBook);

router.patch(
  "/:id",
  validateRequest(BookValidations.updateBookZodSchema),
  BookController.updateSingleBook
);
router.delete("/delete-book/:id", BookController.deleteSingleBook);

export const BookRoutes = router;
