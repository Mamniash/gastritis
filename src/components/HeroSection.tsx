"use client";

import React, { useState } from "react";
import { Button, Input, Form, notification, Spin } from "antd";
import { motion } from "framer-motion";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import { sendToTelegram } from "@/helpers/telegramApi";

const HeroSection = () => {
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

        {/* Правая часть (Форма и текст) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="primary-color">Ешь с умом</span>, живи легче вместе
            с нами!
          </h1>

          <p className="text-lg mb-8">
            Устали от планирования питания и походов за продуктами? Мы упрощаем
            вашу жизнь, предоставляя персонализированные планы питания. Просто
            оставьте свой email, и мы с вами свяжемся!
          </p>

          <Form
            form={form}
            onFinish={handleSubmit}
            layout="inline"
            className="flex flex-col sm:flex-row gap-3 mb-4"
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Введите ваш email" },
                { type: "email", message: "Введите корректный email" },
              ]}
              className="mb-0 w-full sm:w-auto"
              style={{ flex: 1 }}
            >
              <Input
                placeholder="Введите ваш email"
                className="rounded-full px-4 py-2"
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              size="large"
              className="primary-bg"
              disabled={loading}
              style={{ width: "250px" }} // фиксированная ширина
            >
              {loading ? <Spin /> : "Подписаться"}
            </Button>
          </Form>

          {/* Анимация сообщения об успехе/ошибке */}
          {message && (
            <motion.div
              className={`p-4 mt-4 rounded-lg ${
                messageType === "success" ? "bg-green-500" : "bg-red-500"
              } text-white`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {message}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
