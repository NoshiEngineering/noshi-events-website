"use client";
import React, { useState, useEffect, useRef } from "react";
import { processDescription } from "../constants";
import { Stack, Typography } from "@mui/material";
import ProcessIcons from "./ProcessIcons";
import styles from "./styles.module.css";

const TabScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [contentHeight, setContentHeight] = useState<number | undefined>(
    undefined
  );
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Handle scroll to update the active index
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

  useEffect(() => {
    // Update container height based on content
    if (containerRef.current) {
      setContentHeight(containerRef.current.scrollHeight);
    }
  }, [processDescription]);

  const getLabelStyles = (
    index: number,
    defaultFontSize = "28px",
    maximizedFontSize = "32px"
  ) => {
    const isActive = activeIndex === index;
    const fontSize = isActive ? maximizedFontSize : defaultFontSize;
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
          height: contentHeight ? `${contentHeight}px` : "auto",
          width: "2px",
          backgroundColor: "#765D37",
          // display: { xs: "none", md: "block" },
          marginRight: { xs: "10px", md: "0px" },
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
      <Stack
        ref={containerRef}
        gap={{ xs: "20px", md: "59px" }}
        sx={{
          paddingLeft: { md: "20px" },
          paddingRight: { md: "100px" },
        }}
        className={styles.contentContainer}
      >
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
                activeIndex === index ? "translateY(0)" : "translateY(20px)",
              transition: "transform 0.3s ease",
            }}
          >
            <Typography
              fontSize={{
                xs: getLabelStyles(index, "18px", "20px").fontSize,
                md: getLabelStyles(index).fontSize,
              }}
              fontWeight={getLabelStyles(index).fontWeight}
              sx={{
                transition: "font-size 0.3s ease, font-weight 0.3s ease",
              }}
            >
              {process.label}
            </Typography>
            <Stack spacing={1}>
              <Typography
                fontSize={{
                  // xs: getDescriptionStyles(index, "14px", "16px").fontSize,
                  xs: getLabelStyles(index, "16px", "18px").fontSize,
                  md: getDescriptionStyles(index, "20px", "22px").fontSize,
                }}
                fontWeight={getDescriptionStyles(index).fontWeight}
              >
                {process.description} {activeIndex !== index ? "..." : ""}
              </Typography>
              <Stack
                sx={{
                  display: activeIndex === index ? "block" : "none",
                  transform:
                    activeIndex === index
                      ? "translateY(0)"
                      : "translateY(20px)",
                  transition: "transform 0.3s ease",
                }}
              >
                {process.points?.length ? (
                  <ul style={{ paddingLeft: "20px" }}>
                    {process.points.map((point, i) => (
                      <li key={i}>
                        <Typography
                          sx={{
                            fontSize: {
                              xs: getDescriptionStyles(index, "14px", "16px")
                                .fontSize,
                              md: getDescriptionStyles(index, "16px", "18px")
                                .fontSize,
                            },
                            fontWeight: getDescriptionStyles(index).fontWeight,
                          }}
                        >
                          {point}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {process.conclusion && (
                  <Typography
                    fontSize={{
                      // xs: getDescriptionStyles(index, "14px", "16px").fontSize,
                      xs: getDescriptionStyles(index, "16px", "18px").fontSize,
                      md: getDescriptionStyles(index, "20px", "22px").fontSize,
                    }}
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
      <ProcessIcons
        height={contentHeight ? `${contentHeight}px` : "auto"}
        activeIndex={activeIndex}
      />
    </Stack>
  );
};

export default TabScroll;
