import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import MealPlansSection from '@/components/MealPlansSection';
import DeliverySection from '@/components/DeliverySection';
import OrderSection from '@/components/OrderSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import FeaturesSection from '@/components/FeaturesSection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'

export default function Home() {
	return (
		<main>
			<Header />
			<HeroSection />
			<MissionSection />
			<HowItWorksSection />
			<MealPlansSection />
			<FeaturesSection />
			{/* <DeliverySection /> */}
			<PricingSection />
			<FAQSection />
			<OrderSection />
			{/* <TestimonialsSection /> */}
			<Footer />
		</main>
	)
}
