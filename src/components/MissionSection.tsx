'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import useIsMobile from '@/helpers/useIsMobile'

const MissionSection = () => {
	const isMobile = useIsMobile() // Используем хук

	return (
		<section className='bg-white py-16 scroll-mt-16' id='about'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className='max-w-4xl mx-auto text-center'
				>
					<h2 className='text-3xl md:text-4xl font-bold mb-8'>
						Наша Миссия и Ценности
					</h2>

					<p className='text-lg leading-relaxed'>
						{/* Если мобильное разрешение, показываем сокращенную версию текста */}
						{isMobile ? (
							<>
								Есть что поесть стремится сделать процесс питания
								простым и доступным для каждого. Наша миссия заключается
								в том, чтобы предлагать удобные решения для выбора,
								чтобы каждый мог легко и быстро организовать свое
								питание. Присоединяйтесь к нам и откройте для себя, как
								легко можно находить и выбирать заказывать продукты с
								доставкой!
							</>
						) : (
							<>
								Есть что поесть стремится сделать процесс питания
								простым и доступным для каждого. Наша миссия заключается
								в том, чтобы предлагать удобные решения для выбора и
								заказа продуктов, что позволяет нашим клиентам
								сосредоточиться на том, что действительно важно в их
								жизни. Мы придерживаемся самых высоких стандартов
								качества и доступности, предлагая только свежие и
								качественные продукты, чтобы каждый мог легко и быстро
								организовать свое питание. Присоединяйтесь к нам и
								откройте для себя, как легко можно находить, выбирать и
								заказывать продукты с доставкой!
							</>
						)}
					</p>
				</motion.div>
			</div>
		</section>
	)
}

export default MissionSection
