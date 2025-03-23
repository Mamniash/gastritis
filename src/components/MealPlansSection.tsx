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
						Преимущества Есть что поесть!
					</h2>

					<Row gutter={[32, 32]} className='mt-12'>
						<Col xs={24} md={12}>
							<motion.div
								whileHover={{ scale: 1.03 }}
								transition={{ duration: 0.3 }}
								className='bg-[#1a1a1a] rounded-xl p-8 h-full'
							>
								<h4 className='text-2xl font-bold mb-4'>
									Экономьте время&nbsp;и&nbsp;деньги
								</h4>
								<p className='text-gray-300'>
									Забудьте о долгих походах&nbsp;по&nbsp;магазинам
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
									Гарантия лучшей цены
								</h4>
								<p className='text-gray-300'>
									Автоматическое сравнение цен во всех магазинах
									позволит вам экономить&nbsp;до&nbsp;30%
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
									учитывая все ваши&nbsp;ограничения
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
									Планирование
								</h4>
								<p className='text-gray-300'>
									Планирование рациона из списка блюд, на несколько
									дней или недель вперед с расчетом бюджета, нужно
									только нажать&nbsp;заказать
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
