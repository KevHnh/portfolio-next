import "../styles/style.css";
import "../styles/components.css";

export const metadata = {
  title: "Kevin Hinh | SWE & Designer",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
