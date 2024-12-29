import ContactUs from "@/components/ContactForm";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Stack className="fixed-size-container">
        <ContactUs />
      </Stack>
    </>
  );
}
