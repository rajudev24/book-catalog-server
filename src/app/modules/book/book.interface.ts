import { Model } from "mongoose";

export interface IBook {
  title: string;
  author: string;
  genre: string;
  publicationDate: Date;
  reviews: [];
}

export type IBookFilters = {
  searchTerm?: string;
  genre?: string;
  publictionDate?: string;
};
export type BookModel = Model<IBook, Record<string, unknown>>;
