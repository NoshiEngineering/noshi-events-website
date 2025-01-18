import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "@/theme/theme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SnackbarProvider from "@/Context/SnackbarContext";

// Google Font: Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Noshi Events",
  description: "Noshi Events !!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <SnackbarProvider>
              {children}
              <Footer />
            </SnackbarProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
