import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Book } from "../types/book";

interface BookCardProps {
  book: Book;
}
export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [showDetails, setShowDetails] = React.useState(false);
  const {
    title,
    author,
    genre,
    publication_year,
    pages,
    reserved,
    available,
    available_online,
    return_date,
    publisher,
    location,
  } = book;
  const showDetailsClick = () => {
    setShowDetails(!showDetails);
  };
  const styles = {
    boldText: {
      fontWeight: "bold",
    },
  };
  return (
    <Card>
      <CardMedia
        sx={{ height: 60 }}
        image="/images/cover1.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {title}
        </Typography>
        {showDetails && (
          <>
            <Typography variant="body2" color="text.secondary">
              <span className="boldText" style={styles.boldText}>
                Author:
              </span>{" "}
              {author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className="boldText" style={styles.boldText}>
                Genre:
              </span>{" "}
              {genre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className="boldText" style={styles.boldText}>
                Year:
              </span>{" "}
              {publication_year}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className="boldText" style={styles.boldText}>
                Pages:
              </span>{" "}
              {pages}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className="boldText" style={styles.boldText}>
                Reserved:
              </span>{" "}
              {reserved}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className="boldText" style={styles.boldText}>
                Available:
              </span>{" "}
              {available}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className="boldText" style={styles.boldText}>
                Online Availability:
              </span>{" "}
              {available_online ? "Yes" : "No"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className="boldText" style={styles.boldText}>
                Return Date:
              </span>{" "}
              {return_date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className="boldText" style={styles.boldText}>
                Publisher:
              </span>{" "}
              {publisher}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className="boldText" style={styles.boldText}>
                Location:
              </span>{" "}
              {location}
            </Typography>
          </>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={showDetailsClick}>
          {showDetails ? "Hide" : "Show Details"}
        </Button>
      </CardActions>
    </Card>
  );
};
