'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SubscriptionForm from '@/components/SubscriptionForm'

const HeroSection = () => {
	const handleSuccess = (email: string) => {
		console.log(`Успешная подписка! Почта: ${email}`)
	}

	const handleError = (message: string) => {
		console.log(`Ошибка: ${message}`)
	}

	return (
		<section className='relative overflow-hidden scroll-mt-28' id='head'>
			<div className='container mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center'>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className='w-full md:w-1/2 relative'
				>
					<Image
						src='/images/main.jpg' // старое фото — можно заменить на что-то, отражающее боль/облегчение
						alt='Рационы при гастрите — быстрое облегчение боли'
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
							Избавьтесь от боли в желудке за 3 дня
						</span>
					</h1>

					<p className='text-lg mb-8'>
						Специально разработанные наборы питания, одобренные
						гастроэнтерологами. Простые рецепты, безопасные ингредиенты —
						быстрое облегчение симптомов гастрита.
					</p>

					<SubscriptionForm
						onSuccess={handleSuccess}
						onError={handleError}
					/>
				</motion.div>
			</div>
		</section>
	)
}

export default HeroSection
