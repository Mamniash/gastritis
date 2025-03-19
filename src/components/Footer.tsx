'use client';

import React from 'react';
import Link from 'next/link';
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <Link href="/" className="text-xl font-bold mb-4 block">
              Есть что поесть
            </Link>
          </div>

          <div className="flex space-x-6">
            <Link href="/" aria-label="Facebook" className="text-white hover:text-gray-300 transition">
              <FacebookOutlined style={{ fontSize: '24px' }} />
            </Link>
            <Link href="/" aria-label="Instagram" className="text-white hover:text-gray-300 transition">
              <InstagramOutlined style={{ fontSize: '24px' }} />
            </Link>
            <Link href="/" aria-label="YouTube" className="text-white hover:text-gray-300 transition">
              <YoutubeOutlined style={{ fontSize: '24px' }} />
            </Link>
          </div>
        </div>

        <div className="divider bg-gray-800"></div>

        <div className="text-sm text-gray-400">
          <p>Copyright © {currentYear} Есть что поесть. Все права защищены. <Link href="/" className="text-gray-400 hover:text-white">Условия использования</Link> | <Link href="/" className="text-gray-400 hover:text-white">Политика конфиденциальности</Link></p>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/" className="text-gray-400 hover:text-white text-sm">
            Контакты
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white text-sm">
            Доставка
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
