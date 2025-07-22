import Wrapper from "@/Components/wrapper/Wrapper";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

// नया तरीका - एक साथ सभी वेरिएंट्स इम्पोर्ट करें
import '@fontsource/inter/400.css'; // Regular
import '@fontsource/inter/600.css'; // Semi-bold
import '@fontsource/inter/700.css'; // Bold

export const metadata = {
  title: "CareerHub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="font-sans">
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}