'use client'

import React from 'react'
import { Card, Button } from 'antd'
import { StarFilled } from '@ant-design/icons'
import Link from 'next/link'

const avatars = [
	'https://ui-avatars.com/api/?name=Ольга&background=934a3a&color=fff&rounded=true&size=64',
	'https://ui-avatars.com/api/?name=Елена&background=934a3a&color=fff&rounded=true&size=64',
	'https://ui-avatars.com/api/?name=Анна&background=934a3a&color=fff&rounded=true&size=64'
]

const starCount = 5

const testimonials = [
	{
		name: 'Ольга',
		subtitle: 'страдала от боли при гастрите',
		text: 'Боль мучила меня по вечерам. Уже через 3 дня с рационом от вас я почувствовала облегчение. Спасибо за безопасные и вкусные блюда!',
		tag: 'Быстрое облегчение'
	},
	{
		name: 'Елена',
		subtitle: 'использовала наборы при обострении',
		text: 'Эти рационы — настоящее спасение. Все продукты проверены и подходящие, боли значительно уменьшились уже в первую неделю.',
		tag: 'Одобрено врачами'
	},
	{
		name: 'Анна',
		subtitle: 'нашла надежный способ борьбы с гастритом',
		text: 'С набором я перестала бояться еды. Простые рецепты и поддержка специалистов помогли избавиться от боли и улучшить самочувствие.',
		tag: 'Поддержка и безопасность'
	}
]

const TestimonialsSection = () => {
	return (
		<section className='py-16 bg-gray-200'>
			<div className='container mx-auto px-4 max-w-7xl'>
				<h2 className='text-3xl md:text-4xl font-bold mb-12 max-w-md mx-auto text-center'>
					Отзывы тех, кто избавился от боли
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{testimonials.map(({ name, subtitle, text, tag }, idx) => (
						<Card
							key={idx}
							className='rounded-xl shadow-md p-6 bg-white'
							bodyStyle={{ padding: 0 }}
							hoverable
						>
							<div className='p-6 flex flex-col h-full'>
								<div className='flex items-center mb-4'>
									<img
										src={avatars[idx]}
										alt={`${name} avatar`}
										className='w-12 h-12 rounded-full object-cover mr-4 border border-gray-300'
									/>
									<div>
										<div className='font-semibold text-lg'>
											{name}
										</div>
										<div className='text-gray-500 text-sm'>
											{subtitle}
										</div>
										<div className='flex mt-1 text-yellow-400'>
											{[...Array(starCount)].map((_, i) => (
												<StarFilled key={i} />
											))}
										</div>
									</div>
								</div>
								<p className='text-gray-700 mb-6 whitespace-pre-line flex-grow'>
									{text}
								</p>
								<Link href='#order' legacyBehavior>
									<Button
										type='default'
										shape='round'
										size='middle'
										className='cursor-default select-none px-6'
										disabled
										onClick={(e) => e.preventDefault()}
									>
										{tag}
									</Button>
								</Link>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

export default TestimonialsSection
