'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SubscriptionForm from '@/components/SubscriptionForm'
import OrderModal from './OrderModal'

const HeroSection = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<section className='relative overflow-hidden scroll-mt-28 ' id='head'>
			<div className='container mx-auto px-4 pt-12 pb-4 md:py-16 flex flex-col md:flex-row items-center'>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className='w-full md:w-1/2 relative'
				>
					<Image
						src='/images/main.jpg'
						alt='Свежие овощи и здоровая еда'
						width={600}
						height={400}
						className='rounded-lg shadow-lg'
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className='w-full md:w-1/2 mt-8 md:mt-0 md:pl-12'
				>
					<h1 className='text-4xl md:text-5xl font-bold mb-4'>
						<span className='primary-color'>
							Есть&nbsp;что&nbsp;поесть
						</span>
						. Ваш&nbsp;идеальный рацион без хлопот&nbsp;и&nbsp;переплат
					</h1>

					<p className='text-lg mb-8'>
						Автоматически подбираем меню на неделю с учетом ваших
						предпочтений. Мы сравниваем цены на продукты и готовые блюда
						во всех сервисах доставки, чтобы вы всегда получали самое
						выгодное предложение.
					</p>

					{/* Кнопка "Начать" */}
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

					<OrderModal
						open={isModalOpen}
						onClose={() => setIsModalOpen(false)}
					/>
				</motion.div>
			</div>
		</section>
	)
}

export default HeroSection
