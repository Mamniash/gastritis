'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Row, Col, Statistic } from 'antd';
import Image from 'next/image';

const DeliverySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Всё, что вам нужно, <br />
              <em>доставлено к вашей двери</em>
            </h2>

            <p className="text-lg mb-8 pr-0 md:pr-12">
              С Есть что поесть вам никогда не придется беспокоиться о том,
              что вы забыли какой-то ингредиент. Мы предоставляем подробный
              список всего необходимого для каждого плана питания, и вы можете
              заказать всё это всего в несколько кликов. Это так просто!
            </p>

            <Row gutter={[48, 24]}>
              <Col xs={12}>
                <Statistic
                  value={100}
                  suffix="%"
                  title="Ингредиентов из местных источников"
                  valueStyle={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: 'var(--text)'
                  }}
                />
              </Col>
              <Col xs={12}>
                <Statistic
                  value={95}
                  suffix="%"
                  title="Заказов доставлено вовремя"
                  valueStyle={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: 'var(--text)'
                  }}
                />
              </Col>
            </Row>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="rounded-lg overflow-hidden h-96 relative">
              <Image
                src="https://ext.same-assets.com/782599095/4135040809.webp"
                alt="Свежие продукты, которые доставляются к вашей двери"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
