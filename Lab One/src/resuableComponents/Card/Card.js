import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


const BasicCard = ({content, bgColor}) => {
  return (
    <Card className="card" sx={{ minWidth: 275 }}>
      <CardContent sx={{ bgcolor: bgColor }}>
        <Typography variant="h5" component="div">
          {content}
        </Typography>
        <hr />
      </CardContent>
    </Card>
  );
}

export default BasicCard;
