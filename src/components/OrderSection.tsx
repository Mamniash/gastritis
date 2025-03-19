'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Form, Input, Button } from 'antd';
import Image from 'next/image';

const OrderSection = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: { email: string }) => {
    console.log('Submitted email:', values.email);
    // Здесь будет логика отправки формы
    form.resetFields();
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Закажите свою еду сегодня!
              </h2>

              <p className="text-lg mb-8">
                Начните с нашего простого процесса заказа и наслаждайтесь
                вкусными блюдами, доставленными прямо к вашей двери.
              </p>

              <Form form={form} onFinish={handleSubmit} layout="vertical" className="mb-6">
                <Form.Item
                  name="email"
                  className="mb-4"
                  rules={[
                    { required: true, message: 'Пожалуйста, введите ваш email' },
                    { type: 'email', message: 'Пожалуйста, введите корректный email' }
                  ]}
                >
                  <Input placeholder="Введите ваш email" className="rounded-full py-2 px-4" />
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  shape="round"
                  className="primary-bg w-full md:w-auto"
                >
                  Подписаться
                </Button>
              </Form>

              <p className="text-sm text-gray-600">
                Просто выберите свой план питания, выберите любимые ингредиенты и
                разместите заказ. Мы позаботимся обо всем остальном, гарантируя доставку
                свежих ингредиентов к вашей двери, готовых для вас приготовить.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative h-64 md:h-auto"
            >
              <Image
                src="https://ext.same-assets.com/551949812/20905340.webp"
                alt="Шеф-повар готовит свежие ингредиенты"
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
