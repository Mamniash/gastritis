'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Row, Col } from 'antd';

const MealPlansSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Исследуйте наши <em>индивидуальные планы питания</em> для более здорового образа жизни
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            В Есть что поесть мы понимаем, что у каждого свои диетические потребности.
            Поэтому мы предлагаем разнообразные планы питания, разработанные с учетом
            различных предпочтений и требований к питанию. Откройте для себя
            идеальный план, который подпитает ваше тело и упростит вашу жизнь.
          </p>

          <Row gutter={[32, 32]} className="mt-12">
            <Col xs={24} md={12}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1a1a1a] rounded-xl p-8 h-full"
              >
                <h4 className="text-2xl font-bold mb-4">Индивидуальные</h4>
                <p className="text-gray-300">
                  Персонализированные планы, основанные на ваших диетических потребностях и предпочтениях.
                </p>
              </motion.div>
            </Col>

            <Col xs={24} md={12}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1a1a1a] rounded-xl p-8 h-full"
              >
                <h4 className="text-2xl font-bold mb-4">Разнообразные</h4>
                <p className="text-gray-300">
                  Широкий ассортимент кухонь и ингредиентов, чтобы ваши блюда всегда были интересными.
                </p>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </section>
  );
};

export default MealPlansSection;
