'use client';

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import ProcessStep from '@/components/ProcessStep'
import useIsMobile from '@/helpers/useIsMobile'

const HowItWorksSection = () => {
	const [sliderRef] = useKeenSlider<HTMLDivElement>({
		slides: {
			perView: 1.2,
			spacing: 16
		},
		breakpoints: {
			'(min-width: 640px)': {
				slides: { perView: 2.2, spacing: 20 }
			},
			'(min-width: 1024px)': {
				slides: { perView: 3, spacing: 24 }
			}
		}
	})

	const isMobile = useIsMobile() // Используем хук

	return (
		<section className='py-16 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className='text-center mb-12'
				>
					<h2 className='text-3xl md:text-4xl font-bold mb-2'>
						Узнайте, как{' '}
						<span className='primary-color'>Есть что поесть</span>{' '}
						упрощает вашу жизнь
					</h2>
					<p className='text-lg text-gray-600'>
						С Есть что поесть, здоровое и вкусное питание становится проще
						простого. Мы берем на себя все хлопоты, от планирования
						рациона до доставки свежих&nbsp;ингредиентов
					</p>
				</motion.div>
				{/* Для мобильного устройства показываем карточки вертикально с анимацией */}
				{isMobile ? (
					<div className='flex flex-col items-center space-y-8'>
						{[
							'Выберите блюда или рацион',
							'Автоматический разбор рецептов',
							'Сравнение цен',
							'Быстрая доставка',
							'Инструкция по приготовлению'
						].map((title, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.2 }}
								className='text-center w-full'
							>
								<ProcessStep
									title={title}
									description={
										[
											'Сервис предложит меню исходя из ваших вкусов, диетических ограничений\u00A0и\u00A0калорийности',
											'Мы разбиваем блюда на конкретные ингредиенты',
											'Автоматически подберём лучшую цену среди всех\u00A0магазинов и\u00A0сервисов\u00A0доставки',
											'Закажите всё необходимое одним нажатием и получите продукты у себя дома в\u00A0удобное\u00A0время',
											'Прямо в личном кабинете или приложении вы получите\u00A0готовые пошаговые\u00A0инструкции'
										][index]
									}
									imageSrc='https://ext.same-assets.com/570987083/83775813.webp'
									imageAlt={title}
									delay={0}
								/>
							</motion.div>
						))}
					</div>
				) : (
					<div ref={sliderRef} className='keen-slider'>
						<ProcessStep
							title='Выберите блюда или рацион'
							description='Сервис предложит меню исходя из ваших вкусов, диетических ограничений\u00A0и\u00A0калорийности'
							imageSrc='https://ext.same-assets.com/1266087314/4022716150.webp'
							imageAlt='Выберите блюда или рацион'
							delay={0}
						/>
						<ProcessStep
							title='Автоматический разбор рецептов'
							description='Мы разбиваем блюда на\u00A0конкретные\u00A0ингредиенты'
							imageSrc='https://ext.same-assets.com/2436282666/601513818.webp'
							imageAlt='Автоматический разбор рецептов'
							delay={0.2}
						/>
						<ProcessStep
							title='Сравнение цен'
							description='Автоматически подберём лучшую цену среди всех магазинов и\u00A0сервисов\u00A0доставки'
							imageSrc='https://ext.same-assets.com/570987083/83775813.webp'
							imageAlt='Сравнение цен'
							delay={0.4}
						/>
						<ProcessStep
							title='Быстрая доставка'
							description='Закажите всё необходимое одним нажатием и получите продукты у себя дома в\u00A0удобное\u00A0время'
							imageSrc='https://ext.same-assets.com/570987083/83775813.webp'
							imageAlt='Быстрая доставка'
							delay={0.6}
						/>
						<ProcessStep
							title='Инструкция по приготовлению'
							description='Прямо в личном кабинете или приложении вы получите готовые пошаговые\u00A0инструкции'
							imageSrc='https://ext.same-assets.com/570987083/83775813.webp'
							imageAlt='Инструкция по приготовлению'
							delay={0.8}
						/>
					</div>
				)}
			</div>
		</section>
	)
}

export default HowItWorksSection;
