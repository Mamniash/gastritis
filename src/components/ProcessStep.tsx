'use client';

import React from 'react';
import { motion } from 'framer-motion';
import 'keen-slider/keen-slider.min.css'
import { Button, Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

interface ProcessStepProps {
	title: string
	description: string
	imageSrc: string
	imageAlt: string
	delay?: number
}

const ProcessStep = ({
	title,
	description,
	imageSrc,
	imageAlt,
	delay = 0
}: ProcessStepProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay }}
			viewport={{ once: true }}
			className='keen-slider__slide px-4'
		>
			<Card
				className='h-full shadow-md rounded-lg overflow-hidden border-0 w-[300px] mx-auto'
				cover={
					<div className='relative h-64'>
						<Image
							src={imageSrc}
							alt={imageAlt}
							fill
							style={{ objectFit: 'cover' }}
						/>
					</div>
				}
				styles={{ body: { padding: '1.5rem' } }}
			>
				<h5 className='text-xl font-bold mb-4'>{title}</h5>
				<p className='text-gray-700 mb-6 text-lg'>{description}</p>
				<Link href='#order'>
					<Button type='primary' size='middle' shape='round'>
						Узнать больше
					</Button>
				</Link>
			</Card>
		</motion.div>
	)
}

export default ProcessStep
