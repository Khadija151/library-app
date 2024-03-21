import { useState } from "react";
import Header from "./components/header";
import BooksContent from "./components/booksContent";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d81b60",
    },
  },
});
const queryClient = new QueryClient();

function App() {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleFindClick = (value: string) => {
    setSearchValue(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Header onFindClick={handleFindClick} />
          <BooksContent searchValue={searchValue} />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
