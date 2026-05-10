"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials, testimonialsContent } from "../constants/testimonialsData.js";

export const TestimonialSection = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(3);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setItemsPerPage(1);
			} else if (window.innerWidth < 1024) {
				setItemsPerPage(2);
			} else {
				setItemsPerPage(3);
			}
			setCurrentIndex(0);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const totalPages = Math.ceil(testimonials.length / itemsPerPage);

	const nextTestimonial = () => {
		setCurrentIndex((prev) => (prev + 1) % totalPages);
	};

	const prevTestimonial = () => {
		setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3
			}
		}
	};

	const itemVariants = {
		hidden: { y: 30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: [0.16, 1, 0.3, 1]
			}
		}
	};

	return (
		<section
			id="testimonials"
			className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background"
			ref={ref}
		>
			{/* Floating particles background */}
			<div className="absolute inset-0 overflow-hidden -z-10">
				{[...Array(20)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute rounded-full bg-primary/10"
						style={{
							width: Math.random() * 10 + 2 + 'px',
							height: Math.random() * 10 + 2 + 'px',
							left: Math.random() * 100 + '%',
							top: Math.random() * 100 + '%',
						}}
						animate={{
							y: [0, (Math.random() - 0.5) * 100],
							x: [0, (Math.random() - 0.5) * 50],
							opacity: [0.2, 0.8, 0.2],
						}}
						transition={{
							duration: Math.random() * 10 + 10,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'linear'
						}}
					/>
				))}
			</div>

			<motion.div
				className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-20"
				initial={{ width: 0 }}
				animate={{ width: "100%" }}
				transition={{ duration: 1.5, delay: 0.5 }}
			/>

			

			{/* Animated gradient background elements */}
			<motion.div
				className="absolute inset-0 -z-10 overflow-hidden"
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.1 }}
				transition={{ delay: 1, duration: 1.5 }}
			>
				<motion.div
					className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-r from-primary to-purple-500 blur-[80px] sm:blur-[100px] opacity-30"
					animate={{
						x: [0, 20, 0],
						y: [0, -30, 0],
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut'
					}}
				/>
				<motion.div
					className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-r from-blue-500 to-primary blur-[80px] sm:blur-[100px] opacity-30"
					animate={{
						x: [0, -20, 0],
						y: [0, 30, 0],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut',
						delay: 5
					}}
				/>
			</motion.div>
		</section>
	);
};
