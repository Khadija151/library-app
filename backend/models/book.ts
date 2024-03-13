export type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
  publication_year: number;
  publisher: string;
  pages: number;
  location: string;
  available_online: boolean;
  reserved: number;
  return_date: string | null;
  available: number;
};
