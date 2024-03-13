import express from "express";
import { getBooks } from "../controllers/booksControllers";
import { getAuthors, getGenres } from "../controllers/filtersController";

const router = express.Router();
router.get("/authors", getAuthors);
router.get("/genres", getGenres);
router.get("/books", getBooks);

export default router;
