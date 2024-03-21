import { Request, Response } from "express";
import { books } from "../data/books";

export const getBooks = (req: Request, res: Response) => {
  const { genre, author, sort, online, available, searchValue } = req.query;

  let filteredBooks = [...books];

  if (genre) {
    filteredBooks = filteredBooks.filter((book) => book.genre === genre);
  }

  if (author) {
    filteredBooks = filteredBooks.filter((book) => book.author === author);
  }

  if (searchValue && typeof searchValue === "string") {
    filteredBooks = filteredBooks.filter((book) =>
      book.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  if (sort === "old_to_new") {
    filteredBooks.sort((a, b) => a.publication_year - b.publication_year);
  } else if (sort === "new_to_old") {
    filteredBooks.sort((a, b) => b.publication_year - a.publication_year);
  }

  if (online === "true") {
    filteredBooks = filteredBooks.filter(
      (book) => book.available_online === true
    );
  }

  if (available === "true") {
    filteredBooks = filteredBooks.filter((book) => book.available > 0);
  }

  res.json(filteredBooks);
};
