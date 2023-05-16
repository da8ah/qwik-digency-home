/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Slider = qwikify$(() => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
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
			className="z-10 w-full mt-16 owl-carousel owl-theme text-center"
			responsive={responsive}
			infinite
			autoPlay
			autoPlaySpeed={3000}
			transitionDuration={500}
		>
			{data.map((element, index) => {
				return (
					<li key={index} className="leading-loose">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
							eget nisi non tortor porttitor interdum. Donec iaculis sem quis
							ipsum lacinia, eu eleifend dui pulvinar. Donec commodo ante leo,
							quis sollicitudin tellus porttitor non. Pellentesque facilisis
							purus vehicula magna pellentesque dignissim. Aliquam ornare
							ultricies augue in faucibus. Duis sit amet elementum orci. Aliquam
							volutpat leo et elit imperdiet, vitae iaculis orci ultricies. Ut
							id molestie diam.
						</p>
						<div className="flex flex-row justify-center">
							<div className="w-[20%]">
								<img src={element.imgURL} alt={element.imgAlt} />
							</div>
							<div className="w-[80%]">
								<h2>{element.name}</h2>
								<p>{element.rol}</p>
							</div>
						</div>
					</li>
				);
			})}
		</Carousel>
	);
});
