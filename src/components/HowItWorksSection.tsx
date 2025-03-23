'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useKeenSlider, KeenSliderInstance } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import ProcessStep from '@/components/ProcessStep'
import useIsMobile from '@/helpers/useIsMobile'
import Image from 'next/image' // Импортируем Image из next/image

const HowItWorksSection = () => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
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
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		}
	})

	const isMobile = useIsMobile()

	const goToSlide = (index: number) => {
		const slideIndex = index
		if (slider?.current) {
			;(slider.current as unknown as KeenSliderInstance).moveToIdx(
				slideIndex
			)
		}
	}

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
						<span className='primary-color'>
							Есть&nbsp;что&nbsp;поесть
						</span>{' '}
						упрощает вашу&nbsp;жизнь
					</h2>
					<p className='text-lg text-gray-600'>
						С Есть что поесть, здоровое и вкусное питание становится проще
						простого. Мы берем на себя все хлопоты, от планирования
						рациона до доставки свежих&nbsp;ингредиентов
					</p>
				</motion.div>

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
											'Сервис предложит меню исходя из ваших вкусов, диетических\u00A0ограничений',
											'Мы разбиваем блюда на конкретные ингредиенты',
											'Автоматически подберём лучшую цену среди всех\u00A0магазинов и\u00A0сервисов\u00A0доставки',
											'Закажите всё необходимое одним нажатием и получите продукты у себя дома в\u00A0удобное\u00A0время',
											'Прямо в личном кабинете или приложении вы получите\u00A0готовые пошаговые\u00A0инструкции'
										][index]
									}
									// Используем компонент Image для вставки изображения
									imageSrc={`/images/work${index + 1}.jpg`} // Убедитесь, что изображения находятся в папке /public/images/
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
							description='Сервис предложит меню исходя из ваших вкусов, диетических ограничений&nbsp;и&nbsp;калорийности'
							// Используем компонент Image
							imageSrc='/images/work1.jpg'
							imageAlt='Выберите блюда или рацион'
						/>
						<ProcessStep
							title='Автоматический разбор рецептов'
							description='Мы разбиваем блюда на&nbsp;конкретные&nbsp;ингредиенты'
							imageSrc='/images/work2.jpg'
							imageAlt='Автоматический разбор рецептов'
						/>
						<ProcessStep
							title='Сравнение цен'
							description='Автоматически подберём лучшую цену среди всех&nbsp;магазинов и&nbsp;сервисов&nbsp;доставки'
							imageSrc='/images/work3.jpg'
							imageAlt='Сравнение цен'
						/>
						<ProcessStep
							title='Быстрая доставка'
							description='Закажите всё необходимое одним нажатием и получите продукты у себя дома в&nbsp;удобное&nbsp;время'
							imageSrc='/images/work4.jpg'
							imageAlt='Быстрая доставка'
						/>
						<ProcessStep
							title='Инструкция по приготовлению'
							description='Прямо в личном кабинете или приложении вы получите готовые пошаговые&nbsp;инструкции'
							imageSrc='/images/work5.jpg'
							imageAlt='Инструкция по приготовлению'
						/>
					</div>
				)}

				{/* Навигационные точки для ПК */}
				{!isMobile && (
					<div className='flex justify-center mt-8'>
						{[...Array(3)].map((_, index) => (
							<button
								key={index}
								className={`w-6 h-6 rounded-full mx-3 transition-colors duration-300 ${
									currentSlide === index ? 'bg-[#934a3a]' : 'bg-[#ddd]'
								}`}
								onClick={() => goToSlide(index)}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	)
}

export default HowItWorksSection
