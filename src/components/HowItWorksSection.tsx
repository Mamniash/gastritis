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
			title: 'Оцените свои симптомы',
			description:
				'Ответьте на простые вопросы, чтобы подобрать рацион, максимально снижающий боль',
			imageSrc: '/images/work2.jpg',
			imageAlt: 'Оценка симптомов'
		},
		{
			title: 'Получите набор с проверенными продуктами',
			description:
				'Все ингредиенты одобрены гастроэнтерологами и не вызывают обострения',
			imageSrc: '/images/work4.jpg',
			imageAlt: 'Проверенные продукты'
		},
		{
			title: 'Начните готовить и забудьте о боли',
			description:
				'Простые и быстрые рецепты, которые облегчат симптомы уже в первые дни',
			imageSrc: '/images/work5.jpg',
			imageAlt: 'Облегчение боли'
		}
	]

	return (
		<section className='pb-16 pt-6 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<motion.div className='text-center mb-8'>
					<h2 className='text-3xl md:text-4xl font-bold mb-2'>
						Как работает наш сервис
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
