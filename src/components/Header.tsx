'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from 'antd'

const Header = () => {
	return (
		<header className='bg-white shadow-sm py-4'>
			<div className='container mx-auto px-4 flex justify-between items-center'>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='flex items-center'
				>
					<Link href='/' className='font-bold text-2xl primary-color'>
						Есть что поесть
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
					<Link href='/'>
						<Button className='py-4' type='default'>
							Подробнее
						</Button>
					</Link>
					<Link href='/'>
						<Button className='py-4' type='primary'>
							Заказать сейчас
						</Button>
					</Link>
				</motion.div>
			</div>
		</header>
	)
}

export default Header;
