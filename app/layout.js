import "./globals.css";

export const metadata = {
  title: "NBT Chandrayaan 3",
  description: "NBT Chandrayaan 3 Book.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
