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
						src='/images/main.jpg' // старое фото
						alt='Здоровое разнообразное питание для гастрита'
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
							Меню на 7 дней при&nbsp;гастрите
						</span>
					</h1>

					<p className='text-lg mb-8'>
						Специально разработанные меню для людей с гастритом —
						сбалансированные, безопасные и разнообразные блюда, которые
						помогут поддерживать здоровье желудка
						и&nbsp;наслаждаться&nbsp;едой.
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
