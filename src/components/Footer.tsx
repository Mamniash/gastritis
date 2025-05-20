'use client'

import React from 'react'
import Link from 'next/link'
import {
	FacebookOutlined,
	InstagramOutlined,
	YoutubeOutlined,
	SendOutlined,
	EnvironmentOutlined
} from '@ant-design/icons'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='bg-[#111] text-white pt-12 pb-8'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-6'>
					<div>
						<Link
							href='https://companies.rbc.ru/trademark/763184/est-chto-poest/'
							target='_blank'
							className='text-2xl font-bold'
						>
							Есть что поесть
						</Link>
						<p className='text-sm text-gray-400 mt-2 max-w-xs'>
							Меню, план питания и доставка —
							всё&nbsp;в&nbsp;одном&nbsp;месте.
						</p>
					</div>

					{/* Центрирование соц.иконок */}
					<div className='w-full md:w-auto flex justify-center md:justify-end'>
						<div className='flex gap-10 text-white text-xl'>
							<Link
								href='https://www.facebook.com/eatchefs/'
								target='_blank'
								aria-label='Facebook'
								className='hover:text-gray-300 transition'
							>
								<FacebookOutlined />
							</Link>

							<Link
								href='https://www.instagram.com/foodband.ru/'
								target='_blank'
								aria-label='Instagram'
								className='hover:text-gray-300 transition'
							>
								<InstagramOutlined />
							</Link>

							<Link
								href='https://www.youtube.com/channel/UCwnLstpY7RcjKVO9Fpn5gJA'
								target='_blank'
								aria-label='YouTube'
								className='hover:text-gray-300 transition'
							>
								<YoutubeOutlined />
							</Link>

							<Link
								href='https://t.me/s/Poedim_TV'
								target='_blank'
								aria-label='Telegram'
								className='hover:text-gray-300 transition'
							>
								<SendOutlined />
							</Link>
						</div>
					</div>
				</div>

				<div className='text-sm text-gray-400 flex flex-col md:flex-row justify-between items-start gap-2'>
					<p>© {currentYear} Есть что поесть. Все права защищены.</p>
					<div className='flex flex-wrap gap-4 justify-center md:justify-end'>
						<Link
							href='https://companies.rbc.ru/trademark/763184/est-chto-poest/'
							target='_blank'
							className='hover:text-white transition'
						>
							Правовая информация
						</Link>
						<Link
							href='https://yandex.ru/maps/org/yest_chto_poyest/241329877982/?ll=50.215007%2C53.225566&z=15'
							target='_blank'
							className='hover:text-white transition'
						>
							<EnvironmentOutlined className='mr-1' />
							Яндекс Карты
						</Link>
						<Link
							href='https://2gis.ru/samara/branches/70000001028612502'
							target='_blank'
							className='hover:text-white transition'
						>
							2ГИС
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
