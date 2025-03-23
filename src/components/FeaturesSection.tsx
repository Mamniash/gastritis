'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const features = [
	{
		title: 'Персонализированный подбор\u00A0меню',
		description:
			'Учитываем ваши вкусы, цели и ограничения (КБЖУ,\u00A0аллергии)'
	},
	{
		title: 'Автоматическое сравнение\u00A0цен',
		description: 'Находите лучшие предложения продуктов без\u00A0усилий'
	},
	{
		title: 'Подробные рецепты',
		description: 'Пошаговые инструкции с советами\u00A0и\u00A0рекомендациями'
	},
	{
		title: 'Гибкость заказа',
		description: 'Изменяйте состав блюд и продуктов под ваши\u00A0потребности'
	}
]

const FeaturesSection = () => {
	return (
		<section className='py-20 bg-white text-black'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className='text-center mb-12'
				>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Функции и возможности
					</h2>
					<p className='text-gray-600 text-lg max-w-2xl mx-auto'>
						Мы сделали сервис максимально гибким,
						понятным&nbsp;и&nbsp;удобным.
					</p>
				</motion.div>

				<div className='grid gap-10 md:grid-cols-2'>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className='bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition'
						>
							<div className='flex items-start gap-4'>
								<CheckCircle
									className='text-green-500 mt-1'
									size={24}
								/>
								<div>
									<h4 className='text-xl font-semibold mb-1'>
										{feature.title}
									</h4>
									<p className='text-gray-700'>
										{feature.description}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default FeaturesSection
