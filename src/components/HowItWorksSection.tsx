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
			title: 'Выберите рацион для гастрита',
			description:
				'Подберите меню, адаптированное под ваш тип гастрита и стадию заболевания',
			imageSrc: '/images/work2.jpg',
			imageAlt: 'Выбор рациона'
		},
		{
			title: 'Получите безопасные ингредиенты',
			description:
				'Все продукты проверены на отсутствие раздражающих компонентов и аллергенов',
			imageSrc: '/images/work4.jpg',
			imageAlt: 'Безопасные продукты'
		},
		{
			title: 'Готовьте легко и вкусно',
			description:
				'Простые рецепты с минимальным количеством шагов и мягкими вкусами — без стресса и боли',
			imageSrc: '/images/work5.jpg',
			imageAlt: 'Приготовление блюд'
		}
	]

	return (
		<section className='py-16 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<motion.div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold mb-2'>
						Как мы помогаем сохранить здоровье желудка
					</h2>
				</motion.div>

				<div ref={sliderRef} className='keen-slider'>
					{steps.map(({ title, description, imageSrc, imageAlt }, idx) => (
						<ProcessStep
							key={idx}
							title={title}
							description={description}
							imageSrc={imageSrc}
							imageAlt={imageAlt}
							delay={idx * 0.2}
						/>
					))}
				</div>

				<div className='flex justify-center mt-8'>
					{[...Array(3)].map((_, index) => (
						<button
							key={index}
							className={`w-6 h-6 rounded-full mx-3 transition-colors duration-300 ${
								currentSlide === index ? 'bg-[#934a3a]' : 'bg-[#ddd]'
							}`}
							onClick={() => slider?.current?.moveToIdx(index)}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default HowItWorksSection
