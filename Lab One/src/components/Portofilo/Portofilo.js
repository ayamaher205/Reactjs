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
            <Grid container spacing={2}>
                {
                    contents.map( ( e,index ) => {
                        return (
                          <Grid xs={4}>
                            {(index + 1) % 2 === 0 ? (
                              <BasicCard
                                content={e}
                                bgColor={"#00000063"}
                              ></BasicCard>
                            ) : (
                              <BasicCard
                                content={e}
                                bgColor={"#000000c9"}
                              ></BasicCard>
                            )}
                          </Grid>
                        );
                    } )
                }
            </Grid>
            <br/>
        </Box>
    );
};

export default Portofilo;
