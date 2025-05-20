'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Row, Col } from 'antd'

const MealPlansSection = () => {
	const benefits = [
		{
			title: 'Гарантия безопасности',
			description:
				'Все ингредиенты проверены и подходят при гастрите. Исключаем острое, кислое,\u00A0жареное'
		},
		{
			title: 'Разнообразие меню',
			description:
				'Более 600 рецептов с мягкой текстурой и приятными вкусами — никакой скучной\u00A0овсянки!'
		},
		{
			title: 'Простота приготовления',
			description:
				'Подробные инструкции с минимальными шагами — готовьте\u00A0за\u00A015-20\u00A0минут'
		},
		{
			title: 'Поддержка специалистов',
			description:
				'Консультации с нутрициологом и рекомендации по диете включены\u00A0в\u00A0подписку'
		}
	]

	return (
		<section className='pt-16 pb-6 bg-black text-white'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className='text-center mb-12'
				>
					<h2 className='text-3xl md:text-4xl font-bold mb-6'>
						Почему гастритчики выбирают нас
					</h2>

					<Row gutter={[32, 32]} className='mt-12'>
						{benefits.map(({ title, description }, idx) => (
							<Col xs={24} md={12} key={idx}>
								<motion.div
									whileHover={{ scale: 1.03 }}
									transition={{ duration: 0.3 }}
									className='bg-[#1a1a1a] rounded-xl p-8 h-full'
								>
									<h4 className='text-2xl font-bold mb-4'>{title}</h4>
									<p className='text-gray-300'>{description}</p>
								</motion.div>
							</Col>
						))}
					</Row>
				</motion.div>
			</div>
		</section>
	)
}

export default MealPlansSection
