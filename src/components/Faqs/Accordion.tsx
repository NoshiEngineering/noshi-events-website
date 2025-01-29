import React, { useRef, useEffect } from "react";
import styles from "./styles.module.css";
import { Stack, Typography } from "@mui/material";
import {
  ChevronDownCircleOutline,
  ChevronUpCircleOutline,
} from "mdi-material-ui";

interface IAccordionProps {
  question: string;
  answer: string;
  index: number;
  openPanel: number | null;
  toggleAccordion: (panelIndex: number) => void;
}

const Accordion = ({
  question,
  answer,
  index,
  openPanel,
  toggleAccordion,
}: IAccordionProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const open = openPanel === index;

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = open
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [open]);

  return (
    <Stack
      sx={{
        background: open ? "#c8b9a2" : "inherit",
        borderRadius: open ? "16px" : "0px",
        padding: open ? "12px 20px" : "8px 20px",
        overflow: "hidden",
        transition:
          "background-color 300ms, border-radius 300ms, padding 300ms",
      }}
    >
      <Stack onClick={() => toggleAccordion(index)} className={styles.question}>
        <Typography
          color="text.dark"
          variant="subtitle1"
          sx={{ fontWeight: open ? "Medium" : "Regular" }}
          className={styles.heading}
        >
          {question}
        </Typography>
        {open ? (
          <ChevronUpCircleOutline className={styles.icon} />
        ) : (
          <ChevronDownCircleOutline className={styles.icon} />
        )}
      </Stack>
      <Stack
        ref={contentRef}
        sx={{
          maxHeight: "0px",
          overflow: "hidden",
          transition: "max-height 200ms ease-in-out",
        }}
      >
        <Stack
          marginLeft="2px"
          sx={{
            color: open ? "black" : "transparent",
            paddingLeft: "10px", // Add margin for bullet points
            "& ul": {
              listStyleType: "disc", // Display bullet points
              marginLeft: "20px", // Space bullets from the text
            },
            "& li": {
              marginBottom: "5px", // Space out list items
            },
          }}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </Stack>
    </Stack>
  );
};

export default Accordion;
