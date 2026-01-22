import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" })

export const metadata: Metadata = {
  title: "AAA Core IT Solutions | Authentication, Authorization & Accounting",
  description:
    "AAA Core (also known as AAACore or aaacore) IT Solutions - Building digital excellence through cutting-edge IT solutions, innovative web & app development, and strategic digital marketing. Based in Kannur, Kerala.",
  keywords: [
    "AAA Core",
    "AAACORE",
    "aaacore",
    "AAA Core IT Solutions",
    "IT company in India",
    "Web development company",
    "IT Solutions",
    "Web Development",
    "Mobile App Development",
    "Digital Marketing",
    "Cybersecurity",
    "Kerala",
    "Kannur",
  ],
  metadataBase: new URL("https://aaacore.in"),
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "AAA Core IT Solutions",
    description:
      "End-to-end IT services including web development, cloud, cybersecurity, and digital marketing.",
    url: "https://aaacore.in",
    siteName: "AAA Core IT Solutions",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "AAA Core IT Solutions Logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "AAA Core IT Solutions",
    description:
      "End-to-end IT services including web development, cloud, cybersecurity, and digital marketing.",
    images: ["/logo.png"],
  },
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" className="dark">
//       <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AAA Core IT Solutions",
              url: "https://aaacore.in",
              logo: "https://aaacore.in/logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kannur",
                addressRegion: "Kerala",
                addressCountry: "IN",
              },
            }),
          }}
        />

        {children}
        <Analytics />
      </body>
    </html>
  )
}

