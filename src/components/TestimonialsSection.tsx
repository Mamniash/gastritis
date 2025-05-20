'use client'

import React from 'react'
import { Card, Button } from 'antd'
import { StarFilled } from '@ant-design/icons'
import Link from 'next/link'

const avatars = [
	'https://ui-avatars.com/api/?name=Вадим+Некрасов&background=934a3a&color=fff&rounded=true&size=64',
	'https://ui-avatars.com/api/?name=Наталья+и+Алексей&background=934a3a&color=fff&rounded=true&size=64',
	'https://ui-avatars.com/api/?name=Анастасия+Михайлова&background=934a3a&color=fff&rounded=true&size=64'
]

const starCount = 5

const testimonials = [
	{
		name: 'Вадим Некрасов',
		subtitle: 'готовит для себя',
		text: 'Я теперь супы ем! Вместо макарон и яичницы)) Лук нарезали, бульон сварили, говядину потушили. Где вы были раньше?',
		tag: 'Быстро и удобно'
	},
	{
		name: 'Наталья и Алексей',
		subtitle: 'готовят вдвоём',
		text: 'Эти соусы маринара, тоннато, чипсы из шалфея... «Что-то на ресторанном», а у нас теперь такое дома каждый день!',
		tag: 'Вкусно, как в ресторане'
	},
	{
		name: 'Анастасия Михайлова',
		subtitle: 'готовит на всю семью',
		text: 'Просто отключаешь голову, открываешь холодильник, берёшь заветный пакетик, 15 минут и — все сыты и счастливы!',
		tag: 'Помогает готовить'
	}
]

const TestimonialsSection = () => {
	return (
		<section className='py-16 bg-gray-200'>
			<div className='container mx-auto px-4 max-w-7xl'>
				<h2 className='text-3xl md:text-4xl font-bold mb-12 max-w-md mx-auto text-center'>
					А ещё лучше про нас расскажут отзывы наших клиентов
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
