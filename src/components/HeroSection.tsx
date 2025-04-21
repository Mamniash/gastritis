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
		<section className='relative overflow-hidden scroll-mt-28 ' id='head'>
			<div className='container mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center'>
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


/*
, разбиваем блюда на ингредиенты и сравниваем цены
						во всех магазинах. Вам остается лишь получить продукты прямо к
						двери и наслаждаться вкусной, разнообразной и
						сбалансированной&nbsp;едой 
						*/