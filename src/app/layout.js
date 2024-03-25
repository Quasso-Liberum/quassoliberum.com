import localFont from "next/font/local";
import "./globals.css";

const base = localFont({
  src: [
    {
      path: "../../public/font/base.ttf",
    },
  ],
});

export const metadata = {
  title: "Quasso Liberum 11",
  description: "Official website of Quasso Liberum 11",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={base.className}>{children}</body>
    </html>
  );
}
