import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Akmal Goniyyu Hartono | Backend & Fullstack Engineer",
    short_name: "Akmal Portfolio",
    description:
      "Personal portfolio of Akmal Goniyyu Hartono - Backend & Fullstack Engineer specializing in Spring Boot microservices, PostgreSQL, and scalable systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1d2b3e",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
