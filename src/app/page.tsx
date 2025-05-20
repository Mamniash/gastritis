import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import MealPlansSection from '@/components/MealPlansSection'
import OrderSection from '@/components/OrderSection'
import Footer from '@/components/Footer'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Home() {
	return (
		<main>
			<Header />
			<HeroSection />
			<HowItWorksSection />
			<MealPlansSection />
			<TestimonialsSection /> {/* Новая секция отзывов */}
			<OrderSection />
			<Footer />
		</main>
	)
}
