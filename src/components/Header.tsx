'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from 'antd'
import Image from 'next/image'

const Header = () => {
	return (
		<header className='bg-white shadow-sm py-4 fixed top-0 left-0 w-full z-50'>
			<div className='container mx-auto px-4 flex justify-between items-center'>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='flex items-center'
				>
					<Link href='#head'>
						<Image
							src='/logo.png'
							alt='Логотип'
							width={150}
							height={40}
							className='h-auto w-auto'
						/>
					</Link>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className='hidden md:flex space-x-8'
				></motion.div>

				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='flex items-center gap-4'
				>
					<Link href='#about'>
						<Button
							className='py-4'
							type='default'
							shape='round'
							size='large'
						>
							Подробнее
						</Button>
					</Link>
					<Link href='#order'>
						<Button
							className='py-4'
							type='primary'
							shape='round'
							size='large'
						>
							Заказать сейчас
						</Button>
					</Link>
				</motion.div>
			</div>
		</header>
	)
}

export default Header
