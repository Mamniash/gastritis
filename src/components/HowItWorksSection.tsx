'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

interface ProcessStepProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  delay: number;
}

const ProcessStep = ({ title, description, imageSrc, imageAlt, delay }: ProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="w-full md:w-1/3 px-4 mb-8 md:mb-0"
    >
      <Card
        className="h-full shadow-md rounded-lg overflow-hidden border-0"
        cover={
          <div className="relative h-64">
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
        <h5 className="text-xl font-bold mb-4">{title}</h5>
        <p className="text-gray-700 mb-6">{description}</p>
        <Link href="/" className="btn-primary inline-block">
          Узнать больше
        </Link>
      </Card>
    </motion.div>
  );
};

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Узнайте, как <span className="primary-color">Есть что поесть</span> упрощает вашу жизнь
          </h2>
          <p className="text-lg text-gray-600">
            С Есть что поесть, здоровое и вкусное питание становится проще простого.
            Мы берем на себя все хлопоты, от планирования рациона до доставки свежих ингредиентов.
          </p>
        </motion.div>

        <div className="flex flex-wrap -mx-4">
          <ProcessStep
            title="Выберите свой идеальный план"
            description="Просмотрите наши разнообразные планы питания, подобранные с учетом различных требований. Выберите подходящий вариант для своего стиля жизни."
            imageSrc="https://ext.same-assets.com/1266087314/4022716150.webp"
            imageAlt="Человек выбирает план питания на планшете"
            delay={0}
          />

          <ProcessStep
            title="Получите список ингредиентов"
            description="После выбора плана вы получите полный список всех необходимых ингредиентов. Никаких догадок! Всё подробно описано для вашего удобства."
            imageSrc="https://ext.same-assets.com/2436282666/601513818.webp"
            imageAlt="Детальный список ингредиентов на планшете"
            delay={0.2}
          />

          <ProcessStep
            title="Закажите продукты с доставкой"
            description="Закажите все необходимые продукты прямо из нашей системы. Мы отправим к вам свежие продукты и ингредиенты прямо к вашей двери."
            imageSrc="https://ext.same-assets.com/570987083/83775813.webp"
            imageAlt="Доставка продуктов до двери"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
