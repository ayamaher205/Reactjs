import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";
import './ProgressBar.css'
const FlexContainer = styled(Box)({
  display: "flex",
  alignItems: "center", // Align items vertically
});

const BorderLinearProgress = styled( LinearProgress )( () => ( {
    height: 20,
    borderRadius: 5,
    [ `&.${ linearProgressClasses.root }` ]: {
        backgroundColor: "gray",
        [ `& .${ linearProgressClasses.bar }` ]: {
            borderRadius: 5,
            backgroundColor: "whitesmoke", 
        },
    }
} ) );

// Inspired by the former Facebook spinners.

const CustomizedProgressBars = ({content}) => {
    return (
      <FlexContainer>
        <Typography className="txt" variant="body1">{content}</Typography>
        <Box sx={{ flexGrow: 1, ml: 1 }}>
          {" "}
          {}
          <BorderLinearProgress variant="determinate" value={50} />
        </Box>
      </FlexContainer>
    );
}

export default CustomizedProgressBars
