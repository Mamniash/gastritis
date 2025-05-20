'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import ProcessStep from '@/components/ProcessStep'

const HowItWorksSection = () => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
		slides: { perView: 1.2, spacing: 16 },
		breakpoints: {
			'(min-width: 640px)': { slides: { perView: 2.2, spacing: 20 } },
			'(min-width: 1024px)': { slides: { perView: 3, spacing: 24 } }
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		}
	})

	const steps = [
		{
			title: 'Выберите меню для гастрита',
			description:
				'Подберите меню, адаптированное под ваш тип\u00A0гастрита и стадию\u00A0заболевания',
			imageSrc: '/images/work2.jpg',
			imageAlt: 'Выбор меню'
		},
		{
			title: 'Получите безопасные ингредиенты',
			description:
				'Все продукты проверены на отсутствие раздражающих компонентов\u00A0и\u00A0аллергенов',
			imageSrc: '/images/work4.jpg',
			imageAlt: 'Безопасные продукты'
		},
		{
			title: 'Готовьте легко и вкусно',
			description:
				'Простые рецепты с минимальным количеством шагов и мягкими вкусами — готовьте\u00A0за\u00A015-20\u00A0минут',
			imageSrc: '/images/work5.jpg',
			imageAlt: 'Приготовление блюд'
		}
	]

	return (
		<section className='pb-16 pt-6 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<motion.div className='text-center mb-8'>
					<h2 className='text-3xl md:text-4xl font-bold mb-2'>
						Как мы помогаем сохранить здоровье желудка
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
