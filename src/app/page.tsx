import ContactUs from "@/components/ContactForm";
import Processes from "@/components/Homepage/Processes";
import Newsletter from "@/components/Newsletter";
import ReachOut from "@/components/ReachOut";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Home() {
  return (
    <>
      <Stack
        className="fixed-size-container"
        sx={{
          paddingTop: { xs: "30px", md: "15px" },
          paddingBottom: { xs: "20px", md: "18px" },
        }}
      >
        <Stack>
          <Processes />
        </Stack>
        <Grid container>
          <Grid size={{ xs: 12, md: 4.5 }}>
            <ContactUs />
          </Grid>
          <Grid size={{ xs: 12, md: 7.5 }}>
            <Stack
              gap={{ xs: "32px", md: "72px" }}
              paddingLeft={{ md: "50px" }}
            >
              <ReachOut />
              <Newsletter />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
