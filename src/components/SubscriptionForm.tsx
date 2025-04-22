import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Spin } from 'antd'
import { motion } from 'framer-motion'
import { sendToTelegram } from '@/helpers/telegramApi'

interface SubscriptionFormProps {
	onSuccess?: (phone: string) => void
	onError?: (message: string) => void
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({
	onSuccess,
	onError
}) => {
	const [form] = Form.useForm()
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState<string>('')
	const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')

	// Время начала сессии
	const [sessionStartTime] = useState<number>(Date.now())

	// Определяем местоположение пользователя
	const getLocation = async (): Promise<string> => {
		try {
			const res = await fetch('http://ip-api.com/json/')
			const data = await res.json()
			return data.city || 'Неизвестный город'
		} catch (error) {
			return 'Ошибка определения локации'
		}
	}

	// Проверка, прошло ли больше минуты с последней отправки
	const canSendPhone = (): boolean => {
		const lastSentTime = localStorage.getItem('lastSent')
		const now = Date.now()
		if (lastSentTime && now - Number(lastSentTime) < 60 * 1000) {
			return false // Если меньше минуты, не отправляем
		}
		localStorage.setItem('lastSent', now.toString())
		return true
	}

	// Функция для вычисления времени сессии в секундах
	const getSessionTimeInSeconds = (): number => {
		return Math.floor((Date.now() - sessionStartTime) / 1000)
	}

	// Обработчик отправки формы
	const handleSubmit = async (values: { phone: string }) => {
		if (!canSendPhone()) {
			setMessageType('error')
			setMessage('Вы можете отправить телефон не более 1 раза в минуту')
			if (onError)
				onError('Вы можете отправить телефон не более 1 раза в минуту')
			return
		}

		setLoading(true)
		const location = await getLocation()
		const sessionTime = getSessionTimeInSeconds()

		// Отправка данных в Telegram
		const isSent = await sendToTelegram(values.phone, location, sessionTime)
		setLoading(false)

		if (isSent) {
			setMessageType('success')
			setMessage(`Наёбано 😎`)
			if (onSuccess) onSuccess(values.phone)
			form.resetFields()
		} else {
			setMessageType('error')
			setMessage('Ошибка подписки. Попробуйте снова.')
			if (onError) onError('Ошибка подписки. Попробуйте снова.')
		}
	}

	return (
		<>
			<Form
				form={form}
				onFinish={handleSubmit}
				layout='inline'
				className='flex flex-col sm:flex-row gap-3 mb-4'
			>
				<Form.Item
					name='phone'
					rules={[{ required: true, message: 'Введите ваш телефон' }]}
					className='mb-0 w-full sm:w-auto'
					style={{ flex: 1 }}
				>
					<Input
						placeholder='Телефон'
						className='rounded-full px-4 py-2'
					/>
				</Form.Item>

				<Button
					type='primary'
					htmlType='submit'
					shape='round'
					size='large'
					className='primary-bg mr-3 font-semibold'
					disabled={loading}
					block
				>
					{loading ? <Spin /> : 'Получить!'}
				</Button>
			</Form>

			{/* Анимация сообщения об успехе/ошибке */}
			{message && (
				<motion.div
					className={`p-4 my-2 rounded-lg ${
						messageType === 'success' ? 'bg-green-500' : 'bg-red-500'
					} text-white`}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					{message}
				</motion.div>
			)}
		</>
	)
}

export default SubscriptionForm
