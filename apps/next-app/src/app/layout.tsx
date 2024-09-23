import type { Metadata } from "next"
import { pretendard } from "utils/font"
import "./globals.css"

export const metadata: Metadata = {
  title: "Maps",
  description: "All together sharing maps",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Maps" />
        <meta property="og:title" content="Maps" />
        <meta property="og:description" content="All together sharing maps" />
        {/* <meta property="og:url" content="fleaauction.co" />
        <meta property="og:image" content="https://cdn.fleaauction.world/images/preview.png" />
        <meta name="twitter:image" content="https://cdn.fleaauction.world/images/preview.png" />
        <meta name="naver-site-verification" content="2c1f7d33f11733ca0be39877699d905573c7cce3" />
        <meta name="naver-site-verification" content="d703060d9f33d4ba99d672a2c57258fff0a7299d" /> */}
      </head>
      <body className={pretendard.variable}>{children}</body>
    </html>
  )
}
