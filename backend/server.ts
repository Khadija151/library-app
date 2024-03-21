import express from "express";
import routes from "./routes/routes";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
