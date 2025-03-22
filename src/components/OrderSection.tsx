"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Form, Input, Button, notification, Spin } from "antd";
import Image from "next/image";
import { sendToTelegram } from "@/helpers/telegramApi"; // Предположим, что эта функция уже существует

const OrderSection = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  // Определяем местоположение пользователя
  const getLocation = async (): Promise<string> => {
    try {
      const res = await fetch("http://ip-api.com/json/");
      const data = await res.json();
      return data.city || "Неизвестный город";
    } catch (error) {
      return "Ошибка определения локации";
    }
  };

  // Проверка, прошло ли больше минуты с последней отправки
  const canSendEmail = (): boolean => {
    const lastSentTime = localStorage.getItem("lastSent");
    const now = Date.now();
    if (lastSentTime && now - Number(lastSentTime) < 60 * 1000) {
      return false; // Если меньше минуты, не отправляем
    }
    localStorage.setItem("lastSent", now.toString());
    return true;
  };

  const handleSubmit = async (values: { email: string }) => {
    if (!canSendEmail()) {
      setMessageType("error");
      setMessage("❌ Вы можете отправить email не более 1 раза в минуту");
      return;
    }

    setLoading(true);
    const location = await getLocation();

    const isSent = await sendToTelegram(values.email, location);
    setLoading(false);

    if (isSent) {
      setMessageType("success");
      setMessage(`✅ Подписка успешна! Почта: ${values.email}`);
      form.resetFields();
    } else {
      setMessageType("error");
      setMessage("❌ Ошибка подписки. Попробуйте снова.");
    }
  };

  return (
		<section className='py-16 bg-gray-100 scroll-mt-16 ' id='order'>
			<div className='container mx-auto px-4'>
				<div className='bg-white rounded-xl overflow-hidden shadow-lg'>
					<div className='flex flex-col md:flex-row'>
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className='w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center'
						>
							<h2 className='text-3xl md:text-4xl font-bold mb-6'>
								Хотите попробовать первым?
							</h2>

							<p className='text-lg mb-8'>
								Присоединяйтесь к нашей программе бета-тестирования и
								получите бесплатный доступ к премиум-функциям на первые
								2 недели!
							</p>

							<Form
								form={form}
								onFinish={handleSubmit}
								layout='vertical'
								className='mb-6'
							>
								<Form.Item
									name='email'
									className='mb-4'
									rules={[
										{
											required: true,
											message: 'Пожалуйста, введите ваш email'
										},
										{
											type: 'email',
											message: 'Пожалуйста, введите корректный email'
										}
									]}
								>
									<Input
										placeholder='Введите ваш email'
										className='rounded-full py-2 px-4'
									/>
								</Form.Item>

								<Button
									type='primary'
									htmlType='submit'
									size='large'
									shape='round'
									className='primary-bg w-full md:w-auto'
									disabled={loading}
								>
									{loading ? <Spin /> : 'Начать!'}
								</Button>
							</Form>

							{/* Анимация сообщения об успехе/ошибке */}
							{message && (
								<motion.div
									className={`p-4 mb-4 rounded-lg ${
										messageType === 'success'
											? 'bg-green-500'
											: 'bg-red-500'
									} text-white`}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.5 }}
								>
									{message}
								</motion.div>
							)}

							<p className='text-sm text-gray-600'>
								Просто выберите свой план питания, выберите любимые
								ингредиенты и разместите заказ. Мы позаботимся обо всем
								остальном, гарантируя доставку свежих ингредиентов к
								вашей двери, готовых для вас приготовить.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className='w-full md:w-1/2 relative h-64 md:h-auto'
						>
							<Image
								src='https://ext.same-assets.com/551949812/20905340.webp'
								alt='Шеф-повар готовит свежие ингредиенты'
								fill
								style={{ objectFit: 'cover' }}
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
  )
};

export default OrderSection;
