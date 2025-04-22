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
		<div className='keen-slider__slide px-4'>
			<Card
				className='h-full shadow-md rounded-lg overflow-hidden border-0 w-[300px] mx-auto min-h-[450px] flex flex-col'
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
				<div className='h-[208px]'>
					<h5 className='text-xl font-bold mb-4'>{title}</h5>
					<p className='text-gray-700 mb-6 text-lg'>{description}</p>
				</div>
				<Link href='#order'>
					<Button
						type='primary'
						size='middle'
						shape='round'
						className='w-full max-w-[220px] mx-auto'
					>
						Узнать больше
					</Button>
				</Link>
			</Card>
		</div>
	)
}

export default ProcessStep
