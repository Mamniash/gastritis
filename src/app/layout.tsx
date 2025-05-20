import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AntdProvider from "./AntdRegistry";
import { YandexMetrika } from './YandexMetrika'

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: 'Рационы при гастрите — быстрое облегчение боли с гарантией безопасности',
	description:
		'Специальные наборы питания при гастрите для быстрого уменьшения боли. Простые рецепты и проверенные продукты — одобрено гастроэнтерологами.',
	icons: {
		icon: '/favicon2.svg'
	}
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang='ru'>
			<body className={poppins.className}>
				<YandexMetrika />
				<AntdProvider>{children}</AntdProvider>
			</body>
		</html>
  )
}
