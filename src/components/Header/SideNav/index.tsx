import React from "react";
import { Drawer, Stack, Typography } from "@mui/material";
import { CloseCircle } from "mdi-material-ui";

interface ISideNav {
  open: boolean;
  toggleDrawer: any;
}

function SideNav({ open, toggleDrawer }: ISideNav) {
  return (
    <Drawer
      anchor={"left"}
      open={open}
      onClose={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
      sx={{ width: "360px", height: "100%",position: "relative", background: "#fff" }}
    >
      <CloseCircle
        sx={{
          position: "fixed",
          color: "#fff",
          fontSize: "25px",
          cursor: "pointer",
          top: "5px",
        }}
        onClick={() => toggleDrawer(false)}
      />
      <Stack>
        <Typography variant="h4">Drawer</Typography>
      </Stack>
    </Drawer>
  );
}

export default SideNav;
