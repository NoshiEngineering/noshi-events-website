"use client";
import React, { useState, useEffect, useRef } from "react";
import { processDescription } from "../constants";
import { Stack, Typography } from "@mui/material";

const TabScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    const isActive = activeIndex === index;
    const fontSize = isActive ? "32px" : "28px";
    const fontWeight = isActive ? 700 : 600;

    return { fontSize, fontWeight };
  };

  const getDescriptionStyles = (
    index: number,
    defaultFontSize: string = "20px",
    maximizedFontSize: string = "22px"
  ) => {
    const isActive = activeIndex === index;
    const fontSize = isActive ? maximizedFontSize : defaultFontSize;
    const fontWeight = isActive ? 500 : 400;

    return { fontSize, fontWeight };
  };

  return (
    <Stack direction="row" alignItems="flex-start" padding={2}>
      {/* Vertical Divider */}
      <Stack
        sx={{
          position: "relative",
          minHeight: "110vh",
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
            }% + 80px)`,
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
            }}
            sx={{
              padding: "20px 0",
              transform:
                activeIndex === index ? "translateY(0)" : "translateY(20px)", // Smooth transition for position
              transition: "transform 0.3s ease", // Smooth transition for position
            }}
          >
            <Typography
              fontSize={getLabelStyles(index).fontSize}
              fontWeight={getLabelStyles(index).fontWeight}
              sx={{
                transition: "font-size 0.3s ease, font-weight 0.3s ease", // Smooth transition for font size and weight
              }}
            >
              {process.label}
            </Typography>
            <Stack spacing={1}>
              <Typography
                fontSize={getDescriptionStyles(index, "20px", "22px").fontSize}
                fontWeight={getDescriptionStyles(index).fontWeight}
                // sx={{
                //   transition: "font-size 0.3s ease, font-weight 0.3s ease",
                // }}
              >
                {process.description} {activeIndex !== index ? "..." : ""}
              </Typography>
              <Stack
                sx={{
                  display: activeIndex === index ? "block" : "none", // Show full description when active
                  transform:
                    activeIndex === index
                      ? "translateY(0)"
                      : "translateY(20px)",
                  transition: "transform 0.3s ease", // Smooth transition for position
                }}
              >
                {process.points?.length ? (
                  <ul style={{ paddingLeft: "20px" }}>
                    {process.points.map((point, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: getDescriptionStyles(index, "16px", "18px")
                            .fontSize,
                          fontWeight: getDescriptionStyles(index).fontWeight,
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
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default TabScroll;
