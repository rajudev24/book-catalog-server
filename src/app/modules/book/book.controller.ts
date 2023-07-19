import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendresponse from "../../../shared/sendResponse";
import { IBook } from "./book.interface";
import httpStatus from "http-status";
import { BookService } from "./book.service";
import pick from "../../../shared/pick";
import { filterAbleFileds } from "./book.constant";

const createBook = catchAsync(async (req: Request, res: Response) => {
  const { ...createBook } = req.body;
  console.log(createBook);

  const result = await BookService.createBook(createBook);

  sendresponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book added successfully",
    data: result,
  });
});
const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, filterAbleFileds);
  console.log(filters);

  const result = await BookService.getAllBook(filters);

  sendresponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Books Retrive successfully",
    data: result.data,
  });
});
const updateSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  console.log(updatedData);

  const result = await BookService.updateSingleBook(id, updatedData);

  sendresponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Books Updated successfully",
    data: result,
  });
});
const deleteSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(id);

  const result = await BookService.deleteSingleBook(id);

  sendresponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Books deleted successfully",
    data: result,
  });
});
const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookService.getSingleBook(id);

  sendresponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Books retrive successfully",
    data: result,
  });
});

const createReview = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const { review } = req.body;
  const result = await BookService.createReview(id, review);

  sendresponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review Added successfully",
    data: result,
  });
});
export const BookController = {
  createBook,
  getAllBook,
  updateSingleBook,
  deleteSingleBook,
  getSingleBook,
  createReview,
};
