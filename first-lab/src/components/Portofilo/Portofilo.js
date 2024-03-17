import * as React from "react";
import BasicCard from "../../resuableComponents/Card/Card";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Portofilo = () => {
    let contents = [
        "CodeCraft",
        "TechTrove",
        "InnovateHub",
        "ByteForge",
        "DataDyno",
        "CodeCanvas",
    ];
    return (
        <Box sx={{ flexGrow: 1 }}>
            <h1>Portofilo</h1>
            <BasicCard></BasicCard>
            <Grid container spacing={2}>
                {
                    contents.map( ( e ) => {
                        return (
                            <Grid xs={4}>
                                <BasicCard content={e}></BasicCard>
                            </Grid>
                        )
                    } )
                }
            </Grid>
        </Box>
    );
};

export default Portofilo;
