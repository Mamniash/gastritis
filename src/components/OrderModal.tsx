'use client'

import React, { useEffect, useState } from 'react'
import { Modal, Typography } from 'antd'
import SubscriptionForm from './SubscriptionForm'
import { sendToTelegram } from '@/helpers/telegramApi'

const { Title, Paragraph } = Typography

interface OrderModalProps {
	open: boolean
	onClose: () => void
}

const OrderModal: React.FC<OrderModalProps> = ({ open, onClose }) => {
	const [sessionStartTime] = useState<number>(Date.now())

	useEffect(() => {
		if (open) {
			// Отправка инфы о событии
			const sendEvent = async () => {
				const res = await fetch('http://ip-api.com/json/')
				const data = await res.json()
				const city = data.city || 'Неизвестный город'
				const sessionTime = Math.floor(
					(Date.now() - sessionStartTime) / 1000
				)
				await sendToTelegram(
					'🟢 Пользователь открыл форму заказа.',
					city,
					sessionTime
				)
			}
			sendEvent()
		}
	}, [open, sessionStartTime])

	return (
		<Modal
			open={open}
			onCancel={onClose}
			footer={null}
			centered
			destroyOnClose
		>
			<div className='text-center p-4'>
				<Title level={4}>Получите идеальный рацион по лучшей цене!</Title>
				<Paragraph>
					Оставьте номер телефона — мы подберем для вас персональное меню и
					отправим инструкцию в течение 10 секунд.
				</Paragraph>

				<SubscriptionForm />
			</div>
		</Modal>
	)
}

export default OrderModal
