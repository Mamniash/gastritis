import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AntdProvider from "./AntdRegistry";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: 'Есть что поесть - Доставка продуктов для здорового питания',
	description:
		'Планы питания с доставкой всех необходимых ингредиентов к вашей двери. Наслаждайтесь вкусными и полезными блюдами без лишних хлопот.',
	icons: {
		icon: 'https://ext.same-assets.com/3626002921/3981942025.webp'
	}
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={poppins.className}>
        <AntdProvider>
          {children}
        </AntdProvider>
      </body>
    </html>
  );
}
