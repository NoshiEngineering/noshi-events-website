/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { blogPosts } from "@/app/(pages)/blog/config";
import { Paper, Stack, Typography } from "@mui/material";
import { ChevronLeftCircle, ChevronRightCircle } from "mdi-material-ui";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ICustomButtonGroupAsArrowsProps {
  next: any;
  previous: any;
}

const CustomButtonGroupAsArrows = ({
  next,
  previous,
}: ICustomButtonGroupAsArrowsProps) => {
  return (
    <Stack>
      <ChevronLeftCircle
        sx={{
          position: "absolute",
          width: "48px",
          height: "48px",
          left: "-2px",
          cursor: "pointer",
        }}
        onClick={previous}
        color="primary"
      />
      <ChevronRightCircle
        sx={{
          position: "absolute",
          width: "48px",
          height: "48px",
          right: "-2px",
          cursor: "pointer",
        }}
        color="primary"
        onClick={next}
      />
    </Stack>
  );
};

const BlogsCrousel = () => {
  return (
    <Stack
      padding="40px 10px 10px 0px"
      spacing={4}
      sx={{ position: "relative" }}
    >
      <Typography
        variant="h2"
        textAlign="center"
        fontWeight={{ xs: 600, md: 700 }}
        fontSize={{ xs: "16px", md: "32px" }}
      >
        BLOGS
      </Typography>
      <Carousel
        autoPlay={true}
        autoPlaySpeed={3000}
        customButtonGroup={
          <CustomButtonGroupAsArrows next={() => {}} previous={() => {}} />
        }
        partialVisible={true}
        className=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 700,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 700,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        arrows={false}
        shouldResetAutoplay={false}
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {blogPosts.map((blog, index) => (
          <Paper
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mx: 1,
              height: 250,
              overflow: "hidden",
              cursor: "pointer",
              padding: "4px 10px",
            }}
            elevation={4}
            onClick={() => window.open(`/blog/${blog.slug}`)}
          >
            <div
              style={{ width: "100%", height: "180px", position: "relative" }}
            >
              <Image
                src={blog.image}
                alt="blog-image"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <Typography variant="subtitle2">{blog.heading}</Typography>
          </Paper>
        ))}
      </Carousel>
    </Stack>
  );
};

export default BlogsCrousel;
