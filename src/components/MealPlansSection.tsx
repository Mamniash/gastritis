'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Row, Col } from 'antd'

const MealPlansSection = () => {
	return (
		<section className='py-16 bg-black text-white'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className='text-center mb-12'
				>
					<h2 className='text-3xl md:text-4xl font-bold mb-6'>
						Преимущества Есть&nbsp;что&nbsp;поесть!
					</h2>

					<Row gutter={[32, 32]} className='mt-12'>
						<Col xs={24} md={12}>
							<motion.div
								whileHover={{ scale: 1.03 }}
								transition={{ duration: 0.3 }}
								className='bg-[#1a1a1a] rounded-xl p-8 h-full'
							>
								<h4 className='text-2xl font-bold mb-4'>
									Гарантия лучшей цены
								</h4>
								<p className='text-gray-300'>
									Экономия до 30% благодаря
									автоматическому&nbsp;сравнению&nbsp;цен
								</p>
							</motion.div>
						</Col>
						<Col xs={24} md={12}>
							<motion.div
								whileHover={{ scale: 1.03 }}
								transition={{ duration: 0.3 }}
								className='bg-[#1a1a1a] rounded-xl p-8 h-full'
							>
								<h4 className='text-2xl font-bold mb-4'>
									Все в одном месте
								</h4>
								<p className='text-gray-300'>
									Планирование, меню, список продуктов и доставка
								</p>
							</motion.div>
						</Col>
						<Col xs={24} md={12}>
							<motion.div
								whileHover={{ scale: 1.03 }}
								transition={{ duration: 0.3 }}
								className='bg-[#1a1a1a] rounded-xl p-8 h-full'
							>
								<h4 className='text-2xl font-bold mb-4'>
									Скидки на продукты
								</h4>
								<p className='text-gray-300'>
									Больше не нужно искать скидки
									Мы&nbsp;делаем&nbsp;это&nbsp;за&nbsp;вас
								</p>
							</motion.div>
						</Col>
						<Col xs={24} md={12}>
							<motion.div
								whileHover={{ scale: 1.03 }}
								transition={{ duration: 0.3 }}
								className='bg-[#1a1a1a] rounded-xl p-8 h-full'
							>
								<h4 className='text-2xl font-bold mb-4'>
									Разнообразие и баланс
								</h4>
								<p className='text-gray-300'>
									Ваш рацион всегда разнообразный и питательный,
									учитывая&nbsp;все&nbsp;ваши&nbsp;ограничения
								</p>
							</motion.div>
						</Col>
					</Row>
				</motion.div>
			</div>
		</section>
	)
}

export default MealPlansSection
