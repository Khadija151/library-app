import React, { useState, useEffect } from "react";
import { BookCard } from "./bookCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useQuery } from "react-query";
import { Book } from "../types/book";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  fetchBooks,
  fetchAuthors,
  fetchGenres,
} from "../apiRequests/fetchApis";

interface BooksContentProps {
  searchValue: string;
}

export default function BooksContent({ searchValue }: BooksContentProps) {
  const [genre, setGenre] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [online, setOnline] = useState<boolean>(false);
  const [available, setAvailable] = useState<boolean>(false);
  const [authors, setAuthors] = useState<string[]>([]);
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [authorsData, genresData] = await Promise.all([
        fetchAuthors(),
        fetchGenres(),
      ]);
      setAuthors(authorsData);
      setGenres(genresData);
    };
    fetchData();
  }, []);

  const {
    data: books,
    isLoading,
    error,
    refetch,
  } = useQuery<Book[]>(["books", searchValue], () =>
    fetchBooks({ genre, author, sort, online, available, searchValue })
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops! error in Fetching Data</div>;
  }

  const handleFilterClick = () => {
    refetch();
  };

  const isAnyInputFilled =
    genre !== "" || author !== "" || sort !== "" || online || available;

  return (
    <>
      <Container maxWidth="md">
        <Grid
          container
          spacing={2}
          alignItems={"center"}
          style={{ marginTop: "0.5%" }}
        >
          <Grid item xs={4} sm={2}>
            <TextField
              value={genre}
              onChange={(e) => setGenre(e.target.value as string)}
              fullWidth
              select
              label="Genre"
            >
              <MenuItem value="">Select Genre</MenuItem>
              {genres.map((genre) => (
                <MenuItem key={genre} value={genre}>
                  {genre}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={4} sm={2}>
            <TextField
              label="Author"
              select
              fullWidth
              value={author}
              onChange={(e) => setAuthor(e.target.value as string)}
            >
              <MenuItem value="">Select Author</MenuItem>
              {authors.map((author) => (
                <MenuItem key={author} value={author}>
                  {author}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={4} sm={2}>
            <TextField
              label="Sort"
              select
              fullWidth
              value={sort}
              onChange={(e) => setSort(e.target.value as string)}
            >
              <MenuItem value="">Sort by</MenuItem>
              <MenuItem value="old_to_new">Old To New</MenuItem>
              <MenuItem value="new_to_old">New To Old</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={4} sm={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={online}
                  onChange={(e) => setOnline(e.target.checked)}
                />
              }
              label="Online"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={4} sm={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={available}
                  onChange={(e) => setAvailable(e.target.checked)}
                />
              }
              label="Available"
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={4} sm={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleFilterClick}
              disabled={!isAnyInputFilled}
            >
              Filter
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={4} style={{ marginTop: "0.5%" }}>
          {books &&
            books.map((book: Book) => {
              return (
                <Grid key={book.id} item xs={12} md={6} lg={4}>
                  <BookCard book={book} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
}
