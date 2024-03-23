import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedIn from '@mui/icons-material/LinkedIn'
import Instagram from "@mui/icons-material/Instagram";
import { Sheet } from "@mui/joy";
const Footer = () => {
  return (
    <Sheet
      variant="solid"
      color="white"
      sx={{
        display: "flex",
        flexDirection: "column", // To stack the icons and the copyright text vertically
        justifyContent: "center",
        bgcolor: "blue",
        textAlign: "center",
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: "sm" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2,justifyContent:"center" }}>
        <IconButton variant="plain">
          <FacebookRoundedIcon />
        </IconButton>
        <IconButton aria-label="twitter">
          <TwitterIcon />
        </IconButton>
        <IconButton variant="plain">
          <GitHubIcon />
        </IconButton>
        <IconButton>
          <LinkedIn />
        </IconButton>
        <IconButton>
          <Instagram />
        </IconButton>
      </Box>

      <div
        class="text-center p-4"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.05)",
  
        }}
      >
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </Sheet>
  );
};

export default Footer;
