'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SubscriptionForm from '@/components/SubscriptionForm'
import useIsMobile from '@/helpers/useIsMobile'

const OrderSection = () => {
	const isMobile = useIsMobile()

	const handleSuccess = (email: string) => {
		console.log(`Успешная подписка! Почта: ${email}`)
	}

	const handleError = (message: string) => {
		console.log(`Ошибка: ${message}`)
	}

	return (
		<section className='py-16 bg-gray-100 scroll-mt-16' id='order'>
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
							<h2 className='text-2xl md:text-3xl font-bold mb-6'>
								Хотите питаться вкусно и без боли?
							</h2>
							<p className='text-lg mb-8'>
								Получите персонализированный рацион для гастрита с
								гарантией безопасности и поддержкой нутрициолога.
							</p>
							<SubscriptionForm
								onSuccess={handleSuccess}
								onError={handleError}
							/>
							{isMobile ? (
								<p className='text-sm text-gray-600 mt-4'>
									Просто выберите свой план питания и получайте свежие,
									безопасные продукты с подробными рецептами.
								</p>
							) : (
								<p className='text-sm text-gray-600 mt-4'>
									Удобство и разнообразие каждый день — питание,
									адаптированное под ваш желудок.
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
								src='/images/order.jpg'
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
