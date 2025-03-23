'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SubscriptionForm from '@/components/SubscriptionForm'
import useIsMobile from '@/helpers/useIsMobile' // Импортируем хук

const OrderSection = () => {
	const isMobile = useIsMobile() // Используем хук

	const handleSuccess = (email: string) => {
		console.log(`Успешная подписка! Почта: ${email}`)
	}

	const handleError = (message: string) => {
		console.log(`Ошибка: ${message}`)
	}

	return (
		<section className='py-16 bg-gray-100 scroll-mt-16 ' id='order'>
			<div className='container mx-auto px-4'>
				<div className='bg-white rounded-xl overflow-hidden shadow-lg'>
					<div className='flex flex-col md:flex-row'>
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className='w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center'
						>
							<h2 className='text-3xl md:text-4xl font-bold mb-6'>
								Хотите попробовать&nbsp;первым?
							</h2>
							<p className='text-lg mb-8'>
								Присоединяйтесь к нашей программе бета-тестирования и
								получите бесплатный доступ к премиум-функциям на
								первые&nbsp;2&nbsp;недели!
							</p>
							<SubscriptionForm
								onSuccess={handleSuccess}
								onError={handleError}
							/>
							{/* Отображаем только на мобильных устройствах */}
							{isMobile ? (
								<p className='text-sm text-gray-600'>
									Выберите свой план питания и любимые ингредиенты. Мы
									позаботимся обо всем&nbsp;остальном
								</p>
							) : (
								<p className='text-sm text-gray-600'>
									Выберите свой план питания и любимые ингредиенты. Мы
									позаботимся обо всем остальном, гарантируя доставку
									свежих ингредиентов к вашей двери, готовых
									для&nbsp;приготовления
								</p>
							)}
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className='w-full md:w-1/2 relative h-64 md:h-auto'
						>
							<Image
								src='https://ext.same-assets.com/551949812/20905340.webp'
								alt='Шеф-повар готовит свежие ингредиенты'
								fill
								style={{ objectFit: 'cover' }}
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default OrderSection
