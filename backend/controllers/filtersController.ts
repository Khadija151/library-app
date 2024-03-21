import { Request, Response } from "express";
import { books } from "../data/books";

export const getAuthors = (req: Request, res: Response) => {
  const authors = Array.from(new Set(books.map((book) => book.author)));
  res.json(authors);
};

export const getGenres = (req: Request, res: Response) => {
  const genres = Array.from(new Set(books.map((book) => book.genre)));
  res.json(genres);
};
