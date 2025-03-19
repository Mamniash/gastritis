'use client';

import React from 'react';
import { Button, Input, Form } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: { email: string }) => {
    console.log('Submitted email:', values.email);
    // Здесь будет логика отправки формы
    form.resetFields();
  };

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center">
        {/* Левая часть (Изображение) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative"
        >
          <Image
            src="https://ext.same-assets.com/615867683/3055122514.webp"
            alt="Свежие овощи и здоровая еда"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Правая часть (Текст и форма) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="primary-color">Ешь с умом</span>, живи легче вместе с нами!
          </h1>

          <p className="text-lg mb-8">
            Устали от планирования питания и походов за продуктами? Есть что поесть
            упрощает вашу жизнь, предоставляя подобранные планы питания со
            всеми необходимыми ингредиентами, доставленными к вашей двери.
            Наслаждайтесь вкусными, здоровыми блюдами без лишних хлопот.
            Начните своё кулинарное путешествие сегодня!
          </p>

          <Form form={form} onFinish={handleSubmit} layout="inline" className="flex flex-col sm:flex-row gap-3 mb-4">
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Пожалуйста, введите ваш email' },
                { type: 'email', message: 'Пожалуйста, введите корректный email' }
              ]}
              className="mb-0 w-full sm:w-auto"
              style={{ flex: 1 }}
            >
              <Input placeholder="Введите ваш email" className="rounded-full px-4 py-2" />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              size="large"
              className="primary-bg"
            >
              Подписаться
            </Button>
          </Form>

          <p className="text-sm text-gray-600">
            Подписываясь, вы соглашаетесь с нашими Условиями использования и Политикой конфиденциальности.
            Мы уважаем вашу конфиденциальность и никогда не будем делиться вашей информацией с третьими лицами.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
