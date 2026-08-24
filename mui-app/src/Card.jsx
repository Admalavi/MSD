import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function MyCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          Card
        </Typography>

        <Typography variant="body2">
          This is some card content.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MyCard;