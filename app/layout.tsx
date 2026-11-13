import Header from "@/components/layout/header";
import "./globals.css";
import { Caveat, Geist, Geist_Mono, Outfit } from "next/font/google";
import type { Metadata, Viewport } from "next";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/layout/footer";
import ThemeContextProvider from "@/context/theme-context";
import SeasonProvider from "@/components/providers/season";
import MotionProvider from "@/components/providers/motion";
import ShojiTransition from "@/components/ui/shoji-transition";
import Shortcuts from "@/components/ui/shortcuts";
import { siteUrl } from "@/lib/site";

// Outfit: a clean geometric sans for headings and the name.
const display = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});
const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
// Handwriting for the margin doodles, which only show on wide screens: no preload.
const hand = Caveat({ subsets: ["latin"], weight: ["500"], variable: "--font-hand", display: "swap", preload: false });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f5f0" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0b" },
  ],
  width: "device-width",
  initialScale: 1,
};

const NAME = "Rakesh Patnam";
const ROLE = "Python Developer";
const TITLE = `${NAME} | ${ROLE}`;
const DESCRIPTION =
  "Portfolio of Rakesh Patnam, a Python developer with 1.9 years of experience building tested Django and Flask applications, REST APIs and automation, backed by SQL and Linux skills, plus AI/ML projects with TensorFlow and PyTorch.";
const SHORT_DESCRIPTION =
  "Portfolio of Rakesh Patnam: Python developer building Django and Flask applications, REST APIs, automation and AI/ML projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: TITLE,
    template: `%s | ${NAME}`,
  },
  description: DESCRIPTION,
  applicationName: `${NAME} Portfolio`,
  keywords: [
    "Rakesh Patnam",
    "Python developer",
    "Django developer",
    "Flask developer",
    "REST API",
    "SQL developer",
    "Linux administration",
    "AI/ML engineer",
    "TensorFlow",
    "PyTorch",
    "automation",
    "incident management",
    "Hyderabad",
    "developer portfolio",
  ],
  authors: [{ name: NAME, url: siteUrl }],
  creator: NAME,
  publisher: NAME,
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: `${NAME} Portfolio`,
    title: TITLE,
    description: SHORT_DESCRIPTION,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${NAME} - ${ROLE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SHORT_DESCRIPTION,
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${NAME} Portfolio`,
      description: "Portfolio of a Python developer building Django and Flask applications, APIs, automation and AI/ML projects.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: NAME,
      url: siteUrl,
      image: `${siteUrl}/avatar.png`,
      jobTitle: ROLE,
      description:
        "Python developer with 1.9 years of experience building tested Django and Flask applications, REST APIs and automation, backed by SQL and Linux skills, plus AI/ML projects in TensorFlow and PyTorch.",
      email: "mailto:patnamrakesh406@gmail.com",
      sameAs: [
        "https://www.linkedin.com/in/rakesh-patnam-",
        "https://github.com/Rakesh120205",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Sphoorthy Engineering College",
      },
      worksFor: {
        "@type": "Organization",
        name: "Cognizant",
      },
      knowsAbout: [
        "Python",
        "Django",
        "Django REST Framework",
        "Flask",
        "SQL",
        "SQL Server",
        "MySQL",
        "Linux",
        "TensorFlow",
        "PyTorch",
        "OpenCV",
        "NLTK",
        "Generative AI",
        "REST APIs",
        "Incident management",
        "Agile",
        "Git",
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#projects`,
      name: `Featured Projects by ${NAME}`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "CreativeWork",
            name: "Mental Health Analyzer (CNN)",
            description:
              "Python web application using OpenCV and a TensorFlow CNN for real-time facial emotion detection alongside psychometric tests.",
            author: { "@id": `${siteUrl}/#person` },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "CreativeWork",
            name: "Chatbot Song Recommendation System",
            description:
              "Python conversational assistant using NLTK and PyTorch that interprets intent and mood and recommends music through the Spotify REST API.",
            author: { "@id": `${siteUrl}/#person` },
          },
        },
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: TITLE,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
      hasPart: [
        {
          "@id": `${siteUrl}/#projects`,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.classList.toggle('dark', dark);
                  document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} ${hand.variable} overflow-x-clip font-sans`}
      >
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>

        <MotionProvider>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <SeasonProvider>
                <Header />
                {children}
                <Footer />
                <ShojiTransition />
                <Shortcuts />
              </SeasonProvider>
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
