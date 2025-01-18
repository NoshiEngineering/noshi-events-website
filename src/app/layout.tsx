import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "@/theme/theme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

// Google Font: Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Noshi Events",
  description: "Crafting Experiences That Turn Into Long-Lasting Memories",
  icons: {
    icon: "/favicon.svg", // Standard favicon
    shortcut: "/favicon.svg",
    apple: "/favicon.svg", // For iOS devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager - Async Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RQVBMCPQ4C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RQVBMCPQ4C', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={`${poppins.className}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
