import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import heroImage from "../../assets/images/photo-1531048230592-9903bf40a199.avif";

const AutoPlaySwipeableViews = autoPlay( SwipeableViews );

const Hero = ()=> {
    const theme = useTheme();
    const [ activeStep ] = React.useState( 0 );
    return (
        <Box sx={{ position: "relative", maxWidth: "100%", flexGrow: 1 }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                enableMouseEvents
            >
                <div>
                    <Box
                        component="img"
                        sx={{
                            height: "100vh",
                            display: "block",
                            maxWidth: "100%",
                            overflow: "hidden",
                            width: "100%",
                            position: "relative",
                            textAlign: "center",
                        }}
                        src={heroImage}
                        alt={"static image"}
                    />
                    <Typography
                        variant="h4"
                        sx={{
                            position: "absolute",
                            top: "20%",
                            left: "20%",
                            transform: "translate(-50%, -50%)",
                            color: "white",
                            zIndex: 1,
                        }}
                    >
                        Aya Maher Mohamed
                    </Typography>
                    <Typography
                        paragraph={true}
                        sx={{
                            position: "absolute",
                            top: "30%",
                            left: "20%",
                            transform: "translate(-50%, -50%)",
                            color: "white",
                            zIndex: 1,
                        }}
                    >
                        Student at information technology institution
                    </Typography>
                </div>
            </AutoPlaySwipeableViews>
        </Box>
    );
}

export default Hero;
