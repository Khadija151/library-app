import { Book } from "../types/book";
import axios, { AxiosResponse } from "axios";

const BASE_URL = process.env.FRONTEND_BASE_URL || "http://localhost:8000";

const fetchData = async <T>(endpoint: string): Promise<T> => {
  const url = `${BASE_URL}/${endpoint}`;
  const res: AxiosResponse<T> = await axios.get(url);
  return res.data;
};

export const fetchBooks = async (
  filter: { [key: string]: string | boolean } | null
): Promise<Book[]> => {
  let url = "books";
  if (filter) {
    const queryString = Object.entries<string | boolean>(filter)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    url += `?${queryString}`;
  }
  return fetchData<Book[]>(url);
};

export const fetchCategories = async (): Promise<string[]> => {
  return fetchData<string[]>("categories");
};

export const fetchAuthors = async (): Promise<string[]> => {
  return fetchData<string[]>("authors");
};

export const fetchGenres = async (): Promise<string[]> => {
  return fetchData<string[]>("genres");
};
