import { getCldVideoUrl } from "next-cloudinary";
import "./globals.css";

export const metadata = {
  title: "NBT Chandrayaan 3",
  description: "NBT Chandrayaan 3 Book.",
};

export default function RootLayout({ children }) {
  const videoUrl = getCldVideoUrl({
    src: "NBT-Chandrayaan3/video/r71irdpujpafpqcj6gee",
  });

  return (
    <html lang="en">
      <body>
        <div className="w-full min-h-screen bg-cover select-none relative">
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={videoUrl}
            autoPlay
            loop
            muted
          ></video>
          <div className="relative">{children}</div>
        </div>
      </body>
    </html>
  );
}
