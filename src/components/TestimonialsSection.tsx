'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Row, Col, Card, Avatar } from 'antd';
import Image from 'next/image';

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  avatar: string;
  delay: number;
}

const Testimonial = ({ quote, name, position, avatar, delay }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="w-full md:w-1/3 px-4 mb-8 md:mb-0"
    >
      <Card className="testimonial-card h-full flex flex-col">
        <div className="flex-grow mb-4">
          <p className="italic text-lg">{quote}</p>
        </div>
        <div className="flex items-center mt-4">
          <div className="relative h-12 w-12 mr-4">
            <Image
              src={avatar}
              alt={name}
              fill
              className="rounded-full"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <h5 className="font-bold text-base m-0">{name}</h5>
            <p className="text-gray-500 text-sm">{position}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Отзывы клиентов
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Послушайте наших довольных клиентов о их опыте с нашим сервисом.
          </p>
        </motion.div>

        <div className="flex flex-wrap -mx-4">
          <Testimonial
            quote="Я был приятно удивлен, как просто и быстро это работает. Теперь каждую неделю получаю свежие продукты и блюда получаются восхитительно!"
            name="Иван Петров"
            position="Клиент Есть что поесть"
            avatar="https://ext.same-assets.com/2551999732/3521036518.webp"
            delay={0}
          />

          <Testimonial
            quote="Сервис Есть что поесть значительно упростил мой процесс приготовления пищи. Я рекомендую их всем!"
            name="Мария Смирнова"
            position="Клиент Есть что поесть"
            avatar="https://ext.same-assets.com/204474362/3640097325.webp"
            delay={0.2}
          />

          <Testimonial
            quote="Я поражаюсь тому, что качественные продукты можно так просто найти. Вы делаете то что делаете. Спасибо, Есть что поесть!"
            name="Алексей Иванов"
            position="Клиент Есть что поесть"
            avatar="https://ext.same-assets.com/2922285052/627212711.webp"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
