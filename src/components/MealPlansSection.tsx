'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Row, Col } from 'antd'
import AdvantageModal from './AdvantageModal'

const advantages = [
	{
		title: 'Гарантия лучшей цены',
		short: 'Экономия до 30% благодаря автоматическому\u00A0сравнению\u00A0цен',
		description: `Мы подключаемся к крупнейшим сервисам доставки: Яндекс.Лавка, Самокат, СберМаркет и д.р. 
Каждый ингредиент сравнивается по цене, 
поэтому вы можете экономить до 30% на продуктах\u00A0без\u00A0усилий.`,
		type: 'price'
	},
	{
		title: 'Все в одном месте',
		short: 'Планирование, меню, список продуктов\u00A0и\u00A0доставка',
		description: `Планирование рациона, рецепты, список продуктов и доставка — всё в одном приложении. 
Больше не нужно использовать несколько сервисов. Мы даем удобство\u00A0в\u00A0одном\u00A0окне`,
		type: 'all-in-one'
	},
	{
		title: 'Скидки на продукты',
		short: 'Больше не нужно искать скидки — Мы\u00A0делаем\u00A0это\u00A0за\u00A0вас',
		description: `Каждый день мы мониторим скидки и акции. 
Вы получаете выгодные предложения сразу, без ручного поиска. Это позволяет экономить до 8000\u00A0рублей\u00A0в\u00A0месяц.`,
		type: 'discounts'
	},
	{
		title: 'Разнообразие и баланс',
		short: 'Ваш рацион всегда разнообразный\u00A0и\u00A0питательный',
		description: `Каждую неделю мы предлагаем новый сбалансированный рацион с учётом диет и предпочтений. 
Мы учитываем цели, аллергию, образ жизни — и даем то, что действительно\u00A0подходит\u00A0вам.`,
		type: 'balance'
	}
]

const MealPlansSection = () => {
	const [modalIndex, setModalIndex] = useState<number | null>(null)

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
						Преимущества Есть&nbsp;что&nbsp;поесть!
					</h2>

					<Row gutter={[32, 32]} className='mt-12'>
						{advantages.map((adv, index) => (
							<Col xs={24} md={12} key={index}>
								<motion.div
									whileHover={{ scale: 1.03 }}
									transition={{ duration: 0.3 }}
									className='bg-[#1a1a1a] rounded-xl p-8 h-full cursor-pointer relative'
									onClick={() => setModalIndex(index)}
								>
									<h4 className='text-2xl font-bold mb-4'>
										{adv.title}
									</h4>
									<p className='text-gray-300'>{adv.short}</p>
									<p className='text-sm text-right text-[#934a3a] mt-4'>
										Подробнее →
									</p>
								</motion.div>
							</Col>
						))}
					</Row>
				</motion.div>

				{modalIndex !== null && (
					<AdvantageModal
						open={true}
						onClose={() => setModalIndex(null)}
						title={advantages[modalIndex].title}
						description={advantages[modalIndex].description}
						type={
							advantages[modalIndex].type as
								| 'price'
								| 'all-in-one'
								| 'discounts'
								| 'balance'
						}
					/>
				)}
			</div>
		</section>
	)
}

export default MealPlansSection
