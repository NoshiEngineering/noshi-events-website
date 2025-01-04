import { Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { footerData } from "./constant";
import { IFooterItem } from "./interface";
import Link from "next/link";
// TODO: fix the dynamic imports of the icons
// import DynamicIcon from "./DynamicIcon";

const RenderLinks = ({ link }: { link: IFooterItem }) => (
  <Link href={link.url} passHref style={{ textDecoration: "none" }}>
    <Stack direction="row" alignItems="center" spacing={1}>
      {/* {link.icon && <DynamicIcon icon={link.icon} />} */}
      <Typography
        color="#FFFFFF"
        fontWeight={500}
        fontSize={{ xs: "14px" }}
        sx={{
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        {link.label}
      </Typography>
    </Stack>
  </Link>
);

const FooterContent = () => {
  return (
    <Grid container spacing={4} width="100%">
      {footerData.map((content, index) => (
        <Grid size={{ xs: 6, md: 4 }} key={index}>
          <Typography color="#FFFFFF" fontWeight={500}>
            {content.title}
          </Typography>
          <Stack marginTop={{ xs: "12px", md: "10px" }} gap={{ xs: "12px" }}>
            {content.links.map((link, index) => (
              <RenderLinks key={index} link={link} />
            ))}
          </Stack>
          <Divider
            sx={{
              borderColor: "white",
              marginTop: { xs: "20px" },
              display: { xs: "block", md: "none" },
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default FooterContent;
