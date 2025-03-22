'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from 'antd'
import Image from 'next/image'

const Header = () => {
	// Состояние для хранения текущей ширины экрана
	const [isMobile, setIsMobile] = useState(false)

	// Хук для обновления состояния ширины экрана
	useEffect(() => {
		const handleResize = () => {
			// Устанавливаем isMobile в true, если ширина экрана меньше 700px
			setIsMobile(window.innerWidth < 700)
		}

		// Добавляем слушатель событий на изменение размера окна
		window.addEventListener('resize', handleResize)

		// Выполняем проверку сразу после загрузки
		handleResize()

		// Убираем слушатель при размонтировании компонента
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<header className='bg-white shadow-sm py-4 fixed top-0 left-0 w-full z-50'>
			<div className='container mx-auto px-4 flex justify-between items-center'>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='flex items-center'
				>
					<Link href='#head'>
						<Image
							src='/logo.png'
							alt='Логотип'
							width={150}
							height={40}
							className='h-auto w-auto'
						/>
					</Link>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className='hidden md:flex space-x-8'
				></motion.div>

				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='flex items-center gap-4'
				>
					{/* Условная отрисовка кнопки "Подробнее" для мобильных устройств */}
					{!isMobile && (
						<Link href='#about'>
							<Button
								className='py-4 text-center'
								type='default'
								shape='round'
								size='large'
							>
								Подробнее
							</Button>
						</Link>
					)}

					{/* Условная отрисовка текста на кнопке "Заказать" в зависимости от разрешения */}
					<Link href='#order'>
						<Button
							className='py-4 sm:text-sm md:text-base lg:text-lg ml-3'
							type='primary'
							shape='round'
							size='large'
						>
							{isMobile ? 'Заказать' : 'Заказать сейчас'}
						</Button>
					</Link>
				</motion.div>
			</div>
		</header>
	)
}

export default Header
