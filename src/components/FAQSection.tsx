'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Row, Col } from 'antd'

const FAQSection = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const toggleAnswer = (index: number) => {
		if (activeIndex === index) {
			setActiveIndex(null)
		} else {
			setActiveIndex(index)
		}
	}

	const faqData = [
		{
			question: 'Как формируется меню?',
			answer:
				'Меню формируется на основе ингредиентов из доставок\u00A0и\u00A0магазинов'
		},
		{
			question: 'Как вы выбираете магазины для сравнения?',
			answer: 'Мы выбираем все доступные магазины\u00A0с\u00A0доставкой'
		},
		{
			question: 'Есть ли доставка в моём\u00A0районе?',
			answer:
				'Если в ваш район доставляет "Купер", то доставка будет\u00A0доступна'
		},
		{
			question: 'Остались вопросы?',
			answer: 'Напишите нам и мы с радостью вам\u00A0поможем!'
		}
	]

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
						Часто задаваемые вопросы
					</h2>

					<Row gutter={[32, 32]} className='mt-12'>
						{faqData.map((item, index) => (
							<Col xs={24} md={12} key={index}>
								<motion.div
									whileHover={{ scale: 1.03 }}
									transition={{ duration: 0.3 }}
									className='bg-[#1a1a1a] rounded-xl p-8 h-full'
								>
									<div
										className='text-xl font-bold mb-4 cursor-pointer flex justify-between items-center text-left'
										onClick={() => toggleAnswer(index)}
									>
										<span className='text-left'>{item.question}</span>
										<span className='text-green-500'>
											{activeIndex === index ? '−' : '+'}
										</span>
									</div>

									{/* Анимация плавного появления и скрытия */}
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{
											opacity: activeIndex === index ? 1 : 0,
											height: activeIndex === index ? 'auto' : 0
										}}
										transition={{
											duration: 0.4,
											ease: 'easeInOut',
											height: {
												type: 'spring',
												stiffness: 100,
												damping: 25
											}
										}}
										className='overflow-hidden'
									>
										{activeIndex === index && (
											<p className='text-gray-300 text-left'>
												{item.answer}
											</p>
										)}
									</motion.div>
								</motion.div>
							</Col>
						))}
					</Row>
				</motion.div>
			</div>
		</section>
	)
}

export default FAQSection
