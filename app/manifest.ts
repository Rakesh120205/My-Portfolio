import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rakesh Patnam | Python Developer",
    short_name: "Rakesh Portfolio",
    description:
      "Portfolio of Rakesh Patnam — a Python developer building Django and Flask applications, REST APIs, automation and AI/ML projects.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5f0",
    theme_color: "#0c0c0b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
