// "use client";
import React from "react";
// import dynamic from "next/dynamic";

// Dynamically import each icon so deserialization issue won't happen
// const DynamicFacebook = dynamic(() => import("mdi-material-ui/Facebook"));
// const DynamicInstagram = dynamic(() => import("mdi-material-ui/Instagram"));
// const DynamicLinkedin = dynamic(() => import("mdi-material-ui/Linkedin"));
// const DynamicYoutube = dynamic(() => import("mdi-material-ui/Youtube"));

const DynamicIcon = ({
  icon,
}: {
  icon: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) => {
  const getIcon = (icon: string) => {
    switch (icon) {
    //   case "Facebook":
    //     return <DynamicFacebook style={{ color: "white" }} />;
    //   case "Instagram":
    //     return <DynamicInstagram style={{ color: "white" }} />;
    //   case "Linkedin":
    //     return <DynamicLinkedin style={{ color: "white" }} />;
    //   case "Youtube":
    //     return <DynamicYoutube style={{ color: "white" }} />;
      default:
        return <></>;
    }
  };
  return <>{getIcon(icon)}</>;
};

export default DynamicIcon;
