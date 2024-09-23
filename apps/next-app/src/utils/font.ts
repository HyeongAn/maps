import localFont from "next/font/local"

export const pretendard = localFont({
  src: [
    {
      path: "../fonts/Pretendard-Thin.woff2",
      weight: "100",
      style: "thin",
    },
    {
      path: "../fonts/Pretendard-ExtraLight.woff2",
      weight: "200",
      style: "extralight",
    },
    {
      path: "../fonts/Pretendard-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Pretendard-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../fonts/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "extrabold",
    },
    {
      path: "../fonts/Pretendard-Black.woff2",
      weight: "900",
      style: "black",
    },
  ],
  display: "swap",
  variable: "--font-pretendard",
  preload: true,
  fallback: ["-apple-system", "BlinkMacSystemFont", "Helvetica", "Arial", "sans-serif"],
})
