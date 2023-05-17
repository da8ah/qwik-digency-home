/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Slider = qwikify$(() => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 1,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	const data = [
		{
			imgURL: "img/ava-1.jpg",
			imgAlt: "employee 1",
			name: "Jhon Doe",
			rol: "CEO & Workcreation",
		},
		{
			imgURL: "img/ava-2.jpg",
			imgAlt: "employee 2",
			name: "Anney Martin",
			rol: "Software Developer",
		},
		{
			imgURL: "img/ava-3.jpg",
			imgAlt: "employee 3",
			name: "William Cooper",
			rol: "Sr. Product Designer",
		},
	];
	return (
		<Carousel
			className="rounded-lg z-0 w-full owl-carousel owl-theme bg-transparent text-center text-[--small-text-color-light] dark:text-[--small-text-color]"
			responsive={responsive}
			infinite
			autoPlay
			arrows={false}
			autoPlaySpeed={3000}
			transitionDuration={500}
		>
			{data.map((element, index) => {
				return (
					<div
						key={index}
						className="px-10 md:px-20 lg:px-40 py-10 flex flex-col justify-center items-center leading-normal"
					>
						<p className="text-center px-20">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
							eget nisi non tortor porttitor interdum. Donec iaculis sem quis
							ipsum lacinia, eu eleifend dui pulvinar. Donec commodo ante leo,
							quis sollicitudin tellus porttitor non. Pellentesque facilisis
							purus vehicula magna pellentesque dignissim.
						</p>
						<div className="w-[40%] py-10 flex flex-row justify-center items-center">
							<div className="w-[100px] h-[100px]">
								<img
									className="aspect-square rounded-full object-cover"
									src={element.imgURL}
									alt={element.imgAlt}
								/>
							</div>
							<div className="w-[80%] flex flex-col justify-center items-center">
								<h2 className="font-extrabold text-2xl text-[--primary-color-light] dark:text-[--primary-color]">
									{element.name}
								</h2>
								<p>{element.rol}</p>
							</div>
						</div>
					</div>
				);
			})}
		</Carousel>
	);
});
