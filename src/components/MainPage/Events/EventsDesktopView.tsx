"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import { IEventType } from ".";
import { ChevronRight } from "mdi-material-ui";
import { useRouter } from "next/navigation";

interface IEventsDesktopViewProps {
  eventTypes: IEventType[];
}

function EventsDesktopView({ eventTypes }: IEventsDesktopViewProps) {
  const router = useRouter();
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
  }, [eventTypes]);

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
    <Stack
      direction="row"
      justifyContent="center"
      sx={{ padding: "40px 0px 20px 0px" }}
    >
      {/* Vertical Divider */}
      <Stack
        sx={{
          position: "relative",
          height: contentHeight ? `${contentHeight}px` : "auto",
          width: "2px",
          backgroundColor: "#765D37",
        }}
      >
        {/* Highlighted Part */}
        <Stack
          sx={{
            position: "absolute",
            top: `calc(${(activeIndex / eventTypes.length) * 100}% + 80px)`,
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
        gap={{ md: "12px" }}
        sx={{ paddingLeft: { md: "20px" }, paddingRight: { md: "20px" } }}
      >
        {eventTypes.map((event, index) => (
          <Stack
            spacing={1}
            key={index}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            sx={{
              padding: "8px 0",
              transform:
                activeIndex === index ? "translateY(0)" : "translateY(20px)",
              transition: "transform 0.3s ease",
            }}
          >
            <Typography
              fontSize={{
                md: getLabelStyles(index, "24px", "32px").fontSize,
              }}
              fontWeight={getLabelStyles(index).fontWeight}
              sx={{
                transition: "font-size 0.3s ease, font-weight 0.3s ease",
              }}
            >
              {event.heading}
            </Typography>
            <Typography
              fontSize={{
                md: getDescriptionStyles(index, "20px", "20px").fontSize,
              }}
              fontWeight={getDescriptionStyles(index).fontWeight}
            >
              {event.desktopdDescription} <br />
              <span
                onClick={() => router.push(`/${event.urlSlug}`)}
                style={{
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  color: "#658352",
                }}
              >
                Read More <ChevronRight />
              </span>
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Stack
        sx={{
          position: "relative",
          width: "100%",
          // height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {eventTypes.map((event, index) => (
          <div
            key={index}
            style={{
              display: activeIndex === index ? "block" : "none",
              transition: "opacity 0.3s ease",
            }}
          >
            <Image src={event.image} alt={event.heading} sizes="100vw" fill />
          </div>
        ))}
      </Stack>
    </Stack>
  );
}

export default EventsDesktopView;
