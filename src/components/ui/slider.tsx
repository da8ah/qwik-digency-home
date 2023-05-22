import { component$ } from "@builder.io/qwik";
import { slideUpdater } from "~/components/assets/animations";

export const Slider = component$(() => {
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
		<div
			document:onLoad$={() => slideUpdater()}
			id="carousel"
			style={{ overflow: "hidden" }} // Must be done with Style in order to work properly
			class="relative overflow-x-scroll snap-x snap-mandatory min-h-[55vh] w-full flex flex-row justify-center items-center bg-transparent text-center text-[--small-text-color-light] dark:text-[--small-text-color]"
		>
			{data.map((element, index) => {
				return (
					<div
						key={index}
						id={`slider-div-${index}`}
						class={
							"absolute snap-center w-full h-full px-1 md:px-20 lg:px-40 md:py-10 flex-[0 0 auto] flex flex-col justify-center items-center leading-normal"
						}
					>
						<p class="text-center md:px-20 line-clamp-5 md:line-clamp-none">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
							eget nisi non tortor porttitor interdum. Donec iaculis sem quis
							ipsum lacinia, eu eleifend dui pulvinar. Donec commodo ante leo,
							quis sollicitudin tellus porttitor non. Pellentesque facilisis
							purus vehicula magna pellentesque dignissim.
						</p>
						<div class="md:w-[40%] py-10 flex flex-col md:flex-row justify-center items-center">
							<div class="w-[100px] h-[100px]">
								<img
									class="aspect-square rounded-full object-cover"
									src={element.imgURL}
									alt={element.imgAlt}
								/>
							</div>
							<div class="md:w-[80%] flex flex-col justify-center items-center">
								<h2 class="font-extrabold text-2xl text-[--primary-color-light] dark:text-[--primary-color]">
									{element.name}
								</h2>
								<p>{element.rol}</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
});
