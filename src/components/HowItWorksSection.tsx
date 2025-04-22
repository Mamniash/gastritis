'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import ProcessStep from '@/components/ProcessStep'

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

	const steps = [
		{
			title: 'Выберите блюда или рацион',
			description:
				'Сервис предложит меню исходя из ваших вкусов, диетических ограничений и калорийности',
			imageSrc: '/images/work1.jpg',
			imageAlt: 'Выберите блюда или рацион'
		},
		{
			title: 'Автоматический разбор блюд',
			description: 'Мы разбиваем блюда на конкретные ингредиенты',
			imageSrc: '/images/work2.jpg',
			imageAlt: 'Автоматический разбор рецептов'
		},
		{
			title: 'Сравнение цен',
			description:
				'Сравниваем цены продуктов в Яндекс.Лавке, СберМаркете, Самокате и других',
			imageSrc: '/images/work3.jpg',
			imageAlt: 'Сравнение цен'
		},
		{
			title: 'Быстрая доставка',
			description:
				'Закажите всё необходимое одним нажатием и получите продукты у себя дома в удобное время',
			imageSrc: '/images/work4.jpg',
			imageAlt: 'Быстрая доставка'
		},
		{
			title: 'Инструкция по приготовлению',
			description:
				'В личном кабинете вы получите готовые пошаговые инструкции',
			imageSrc: '/images/work5.jpg',
			imageAlt: 'Инструкция по приготовлению'
		}
	]

	return (
		<section className='py-16 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<motion.div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold mb-2'>
						Узнайте, как это работает
					</h2>
				</motion.div>

				<div ref={sliderRef} className='keen-slider'>
					{steps.map((step, index) => (
						<ProcessStep
							key={index}
							title={step.title}
							description={step.description}
							imageSrc={step.imageSrc}
							imageAlt={step.imageAlt}
							delay={0.1 * index}
						/>
					))}
				</div>

				<div className='flex justify-center mt-8'>
					{steps.map((_, index) => (
						<button
							key={index}
							className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full mx-2 transition-colors duration-300 ${
								currentSlide === index ? 'bg-[#934a3a]' : 'bg-[#ccc]'
							}`}
							onClick={() => slider.current?.moveToIdx(index)}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default HowItWorksSection
