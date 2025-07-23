import Wrapper from "@/Components/wrapper/Wrapper";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

// Fontsource (Inter)
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

export const metadata = {
  title: "CareerHub",
  description: "Discover opportunities that align with your aspirations and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* 👇 This meta tag is CRUCIAL for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning className="font-sans">
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
