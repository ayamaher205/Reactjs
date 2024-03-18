import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import './Button.css'
const Buttons = ( { variant, txt } ) => {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant={variant}>
                {txt}
            </Button>
        </Stack>
    );
};

export default Buttons;
