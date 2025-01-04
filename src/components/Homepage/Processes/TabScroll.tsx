"use client";
import React, { useState, useEffect, useRef } from "react";
import { processDescription } from "../constants";
import { Stack, Typography } from "@mui/material";

const TabScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]); // Correctly type the ref array

  useEffect(() => {
    const handleScroll = () => {
      const offsetTop = window.scrollY + window.innerHeight / 2; // Center of the viewport

      const currentIndex = sectionRefs.current.findIndex((ref) => {
        if (ref) {
          const top = ref.offsetTop;
          const bottom = top + ref.offsetHeight;
          return offsetTop >= top && offsetTop < bottom; // Check if it's in the viewport center
        }
        return false;
      });

      if (currentIndex !== -1) {
        setActiveIndex(currentIndex); // Set the active section index
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLabelStyles = (index: number) => {
    // Increase font size for the active section
    const isActive = activeIndex === index;
    const fontSize = isActive ? "32px" : "28px"; // Larger font size for the active section
    const fontWeight = isActive ? 700 : 600; // Increase font weight for the active section

    return { fontSize, fontWeight };
  };

  const getDescriptionStyles = (
    index: number,
    defaultFontSize: string = "20px", // Default to "20px" if not provided
    maximizedFontSize: string = "22px" // Default to "22px" if not provided
  ) => {
    const isActive = activeIndex === index;
    const fontSize = isActive ? maximizedFontSize : defaultFontSize; // Use maximized size for active section
    const fontWeight = isActive ? 500 : 400; // Font weight 500 for active section

    return { fontSize, fontWeight };
  };

  return (
    <Stack direction="row" alignItems="flex-start" padding={2}>
      {/* Vertical Divider */}
      <Stack
        sx={{
          position: "relative",
          minHeight: "140vh",
          width: "2px",
          backgroundColor: "#765D37",
        }}
      >
        {/* Highlighted Part */}
        <div
          style={{
            position: "absolute",
            top: `calc(${
              (activeIndex / processDescription.length) * 100
            }% + 80px)`, // adjust 80px based on the gaps so that it will align at the center of the section
            // height: `${100 / processDescription.length}%`,
            height: "75px",
            left: "-5px",
            border: "5px solid #765D37",
            transition: "top 0.3s ease",
          }}
        />
      </Stack>

      {/* Content */}
      <Stack gap="59px" sx={{ paddingLeft: "20px" }}>
        {processDescription.map((process, index) => (
          <Stack
            spacing={1}
            key={index}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }} // No return value here
            style={{ padding: "20px 0" }}
          >
            <Typography
              fontSize={getLabelStyles(index).fontSize} // Apply dynamic font size
              fontWeight={getLabelStyles(index).fontWeight} // Apply dynamic font weight
            >
              {process.label}
            </Typography>
            <Stack spacing={1}>
              <Typography
                fontSize={getDescriptionStyles(index, "20px", "22px").fontSize} // Apply dynamic font size
                fontWeight={getDescriptionStyles(index).fontWeight} // Apply dynamic font weight
              >
                {process.description}
              </Typography>
              {process.points?.length ? (
                <ul style={{ paddingLeft: "20px" }}>
                  {process.points.map((point, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: getDescriptionStyles(index, "16px", "18px")
                          .fontSize, // Use same font size
                        fontWeight: getDescriptionStyles(index).fontWeight, // Use same font weight
                      }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
              {process.conclusion && (
                <Typography
                  fontSize={
                    getDescriptionStyles(index, "20px", "22px").fontSize
                  }
                  fontWeight={getDescriptionStyles(index).fontWeight}
                >
                  {process.conclusion}
                </Typography>
              )}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default TabScroll;
