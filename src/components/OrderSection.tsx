'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import OrderModal from '@/components/OrderModal'
import useIsMobile from '@/helpers/useIsMobile'

const OrderSection = () => {
	const isMobile = useIsMobile()
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<section className='py-12 bg-gray-100 scroll-mt-16 ' id='order'>
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
							<p className='text-lg mb-6'>
								Получите персонализированное меню для гастрита с
								гарантией безопасности и поддержкой нутрициолога.
							</p>

							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6 }}
								className='flex justify-center mb-6'
							>
								<motion.button
									onClick={() => setIsModalOpen(true)}
									className='w-full max-w-sm relative bg-[#934a3a] hover:bg-[#b95c4d] text-white font-semibold px-4 py-3 rounded-full text-base shadow-md'
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									animate={{
										scale: [1, 1.03, 1],
										opacity: [1, 0.95, 1]
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: 'easeInOut'
									}}
								>
									Получить меню
								</motion.button>
							</motion.div>

							{isMobile ? (
								<p className='text-sm text-gray-600 mt-4'>
									Просто выберите свой план питания и получайте свежие,
									безопасные продукты с подробными рецептами.
								</p>
							) : (
								<p className='text-sm text-gray-600'>
									Выберите свой план питания и любимые ингредиенты. Мы
									позаботимся обо всём остальном, гарантируя доставку
									свежих ингредиентов к вашей двери, готовых
									для&nbsp;приготовления
								</p>
							)}

							<OrderModal
								open={isModalOpen}
								onClose={() => setIsModalOpen(false)}
							/>
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
