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
	title: 'Меню при гастрите с доставкой — безопасное и разнообразное питание',
	description:
		'Планы питания и наборы ингредиентов для людей с гастритом. Более 60 рецептов, подтверждённых нутрициологами. Доставка свежих и безопасных продуктов на дом.',
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
