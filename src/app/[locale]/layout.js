import "./globals.scss";

export const metadata = {
  title: "Barkod Electronics",
  description: "Barkod Electronics",
  icons: "/favicon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
