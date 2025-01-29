"use client";
import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import Accordion from "./Accordion";

interface IFAQProps {
  faqs: { question: string; answer: string }[];
}

const FAQ = ({ faqs }: IFAQProps) => {
  const [openPanel, setOpenPanel] = useState<number | null>(null);

  const toggleAccordion = (panelIndex: number) => {
    setOpenPanel(openPanel === panelIndex ? null : panelIndex);
  };

  return (
    <Stack
      className="fixed-size-container"
      paddingTop={{ xs: "50px", md: "100px" }}
      paddingBottom="20px"
      spacing={{ xs: 2, md: 4 }}
    >
      <Typography
        variant="h2"
        textAlign="center"
        fontWeight={{ xs: 600, md: 700 }}
        fontSize={{ xs: "16px", md: "32px" }}
      >
        FAQ’s
      </Typography>
      <Stack>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            toggleAccordion={toggleAccordion}
            openPanel={openPanel}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default FAQ;
