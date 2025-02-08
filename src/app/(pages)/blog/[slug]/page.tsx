import { notFound } from "next/navigation";
import { blogPosts } from "../config";
import { Stack, Typography } from "@mui/material";
import BlogBanner from "@/components/BlogBanner";
import styles from "./index.module.css";
import Image from "next/image";
import { Metadata } from "next";

type TProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: TProps): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  return {
    title: post.heading,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.heading,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPost({ params }: TProps) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <Stack
        sx={{
          height: "auto",
          paddingTop: { xs: "30px", md: "15px" },
          paddingBottom: { xs: "20px", md: "18px" },
          backgroundColor: "#FBF9EF",
        }}
      >
        <BlogBanner />
        <Stack className="fixed-size-container">
          <Typography
            variant="h1"
            className={styles.heading}
            fontWeight="fontWeightBold"
          >
            {post.heading}
          </Typography>
          <Stack className={styles.imageContainer}>
            <Image src={post.image} alt={post.heading} fill={true} />
          </Stack>
          <Stack dangerouslySetInnerHTML={{ __html: post.description }} />
        </Stack>
      </Stack>
    </>
  );
}
