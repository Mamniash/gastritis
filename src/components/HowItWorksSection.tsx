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
			title: 'Выберите меню или\u00A0рацион',
			description:
				'Сервис предложит меню исходя из ваших вкусов, диетических ограничений и\u00A0калорийности',
			imageSrc: '/images/work1.jpg',
			imageAlt: 'Выберите блюда или рацион'
		},
		{
			title: 'Мы автоматически разберём его\u00A0на\u00A0блюда',
			description:
				'Мы разбиваем блюда на конкретные продукты из магазинов\u00A0доставки',
			imageSrc: '/images/work2.jpg',
			imageAlt: 'Автоматический разбор рецептов'
		},
		{
			title: 'Сравниваем цены',
			description:
				'Каждый ингредиент сравнивается по цене, и мы подбираем самые выгодные\u00A0предложения',
			imageSrc: '/images/work3.jpg',
			imageAlt: 'Сравнение цен'
		},
		{
			title: 'Быстро доставляем',
			description:
				'Закажите всё необходимое одним нажатием и получите продукты у себя дома в удобное\u00A0время',
			imageSrc: '/images/work4.jpg',
			imageAlt: 'Быстрая доставка'
		},
		{
			title: 'Вместе с инструкциями по готовке',
			description:
				'В личном кабинете вы получите готовые пошаговые\u00A0инструкции',
			imageSrc: '/images/work5.jpg',
			imageAlt: 'Инструкция по приготовлению'
		}
	]

	return (
		<section className='pb-16 pt-6 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<motion.div className='text-center mb-8'>
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
