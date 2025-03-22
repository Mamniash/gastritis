'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { DollarSign } from 'lucide-react'
import { Button } from 'antd'
import Link from 'next/link'


const pricingPlans = [
	{
		name: 'Базовый',
		description: 'Бесплатный подбор меню, стандартное сравнение цен.',
		price: '300р',
		features: ['Подбор меню', 'Стандартное сравнение цен']
	},
	{
		name: 'Оптимальный',
		description:
			'Персональные рекомендации, углублённый подбор и расширенный доступ к скидкам.',
		price: '500р',
		features: [
			'Персональные рекомендации',
			'Углублённый подбор',
			'Расширенный доступ к скидкам'
		]
	},
	{
		name: 'Премиум',
		description: 'Полное сопровождение, приоритетная поддержка и доставка.',
		price: '700р',
		features: ['Полное сопровождение', 'Приоритетная поддержка', 'Доставка']
	}
]

const PricingSection = () => {
	return (
		<section className='py-20 bg-gray-50 text-black'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='text-center mb-12'
				>
					<h2 className='text-3xl md:text-4xl font-bold mb-6'>
						Тарифы и подписка
					</h2>
					<p className='text-lg max-w-2xl mx-auto'>
						Выбирайте тариф, который подходит вам и начинайте получать
						максимум от нашего сервиса.
					</p>
				</motion.div>

				<div className='grid gap-8 md:grid-cols-3'>
					{pricingPlans.map((plan, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className='bg-white text-black rounded-xl p-6 shadow-lg hover:shadow-xl transition'
						>
							<h3 className='text-2xl font-semibold mb-4'>
								{plan.name}
							</h3>
							<p className='text-gray-600 mb-4'>{plan.description}</p>
							<div className='flex items-center justify-between mb-6'>
								<span className='text-3xl font-bold'>{plan.price}</span>
								<DollarSign className='text-yellow-500' size={30} />
							</div>
							<ul className='mb-6'>
								{plan.features.map((feature, index) => (
									<li
										key={index}
										className='flex items-center gap-2 mb-2'
									>
										<span className='text-green-500'>✔️</span>
										<span>{feature}</span>
									</li>
								))}
							</ul>
							<Link href='#order'>
								<Button className='btn-primary w-full py-3 rounded-lg'>
									Выбрать тариф
								</Button>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default PricingSection
