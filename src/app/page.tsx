import ContactUs from "@/components/ContactForm";
import Banner from "@/components/MainPage/Banner";
import Events from "@/components/MainPage/Events";
import Form from "@/components/MainPage/Form";
import Plan from "@/components/MainPage/Plan";
import Processes from "@/components/MainPage/Processes";
import Newsletter from "@/components/Newsletter";
import ReachOut from "@/components/ReachOut";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Home() {
  return (
    <Stack sx={{ backgroundColor: "#FBF9EF" }} overflow="hidden">
      <Stack
        sx={{
          paddingTop: { xs: "30px", md: "15px" },
          paddingBottom: { xs: "20px", md: "18px" },
        }}
      >
        <Banner />
        <Plan />
        <Events />
        <Form />
        <Stack
          className="fixed-size-container"
          sx={{ marginTop: "28px !important" }}
        >
          <Processes />
          <Grid container gap={{ xs: "40px", md: "0px" }}>
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
      </Stack>
    </Stack>
  );
}
