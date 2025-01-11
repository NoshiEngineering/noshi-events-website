import { Stack, Typography, SxProps } from "@mui/material";
import React from "react";

interface ITextItem {
  content: string;
  clickable?: boolean;
  onClick?: () => void;
  sx?: SxProps;
}

interface IContactCardProps {
  icon: React.ReactNode;
  text: (string | ITextItem)[];
}

const ContactCard: React.FC<IContactCardProps> = ({ icon, text }) => {
  return (
    <Stack alignItems="center" gap={{ xs: "8px", md: "25px" }}>
      {icon}
      {text.map((item, index) =>
        typeof item === "string" ? (
          <Typography
            key={index}
            fontSize={{ xs: "16px", md: "24px" }}
            fontWeight={{ xs: 600 }}
            textAlign="center"
          >
            {item}
          </Typography>
        ) : (
          <Typography
            key={index}
            fontSize={{ xs: "16px", md: "20px" }}
            fontWeight={{ xs: 600 }}
            textAlign="center"
            sx={{
              ...item.sx,
              cursor: item.clickable ? "pointer" : "default",
            }}
            onClick={item.clickable ? item.onClick : undefined}
          >
            {item.content}
          </Typography>
        )
      )}
    </Stack>
  );
};

export default ContactCard;
