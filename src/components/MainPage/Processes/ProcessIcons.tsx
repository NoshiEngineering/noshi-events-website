import Image from "next/image";
import React from "react";
import { Divider, Stack } from "@mui/material";

interface ProcessIconsProps {
  activeIndex: number;
  height: string;
}

const ProcessIcons: React.FC<ProcessIconsProps> = ({ activeIndex, height }) => {
  const processIconsData = [
    { id: 1, image: "/processes/event-execution-1.svg", alt: "Icon 1" },
    { id: 2, image: "/processes/event-planning-1.svg", alt: "Icon 2" },
    { id: 3, image: "/processes/initial-consultation-1.svg", alt: "Icon 3" },
    { id: 4, image: "/processes/post-event-support-1.svg", alt: "Icon 4" },
  ];

  return (
    <Stack
      spacing={4}
      sx={{
        display: { xs: "none", md: "block" },
        position: "relative",
        height: height,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
      }}
    >
      {/* Vertical Divider */}
      <Divider
        orientation="vertical"
        sx={{
          position: "absolute",
          top: "-10%", // Extend divider above the first icon
          height: "120%", // Extend divider beyond the container height
          borderWidth: "6px",
          borderColor: "#8a4d3c",
        }}
      />

      {/* Icons Positioned Along the Divider */}
      {processIconsData.map((item, index) => (
        <Stack
          key={index}
          alignItems="center"
          justifyContent="center"
          sx={{
            position: "absolute",
            top: `${10 + index * 25}%`, // Start icons below the top of the divider
            transform: "translate(-50%, -50%)", // Center the icon
            left: "4px",
            zIndex: 1,
            width: activeIndex === index ? "190px" : "133px",
            height: activeIndex === index ? "190px" : "133px",
            backgroundColor: "white",
            border: "8px solid #8a4d3c",
            borderRadius: "50%",
            overflow: "hidden",
            transition: "all 0.3s ease",
          }}
        >
          <Image
            src={item.image}
            alt={item.alt}
            width={48}
            height={48}
            style={{
              width: activeIndex === index ? "180px" : "130px",
              height: activeIndex === index ? "180px" : "130px",
              transition: "all 0.3s ease",
            }}
          />
        </Stack>
      ))}
    </Stack>
  );
};

export default ProcessIcons;
