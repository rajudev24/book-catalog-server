import { IGenericErrorMessage } from "./error";

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMeesages: IGenericErrorMessage[];
};

export type IGenericSearchFilterResponse<T> = {
  data: T;
};
