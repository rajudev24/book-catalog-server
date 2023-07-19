import { IGenericSearchFilterResponse } from "../../../interfaces/common";
import { bookSearchOptions } from "./book.constant";
import { IBook, IBookFilters } from "./book.interface";
import { Book } from "./book.model";

const createBook = async (payload: IBook): Promise<IBook> => {
  const result = await Book.create(payload);
  return result;
};

const getAllBook = async (
  filters: IBookFilters
): Promise<IGenericSearchFilterResponse<IBook[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const andConditions = [];
  console.log(filtersData);

  if (searchTerm) {
    andConditions.push({
      $or: bookSearchOptions.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([filed, value]) => ({
        [filed]: value,
      })),
    });
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Book.find(whereConditions);

  return {
    data: result,
  };
};
const updateSingleBook = async (id: string, payload: Partial<IBook>) => {
  const result = await Book.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findByIdAndDelete(id);
  return result;
};
const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id);
  return result;
};
const createReview = async (
  id: string,
  review: string
): Promise<IBook | null> => {
  const result = await Book.findOneAndUpdate(
    { _id: id },
    { $push: { reviews: review } }
  );

  return result;
};
export const BookService = {
  createBook,
  getAllBook,
  updateSingleBook,
  deleteSingleBook,
  getSingleBook,
  createReview,
};
