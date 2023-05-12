import { component$ } from "@builder.io/qwik";
import { BusinessCard } from "~/components/ui/cards";
import SectionTitle from "~/components/ui/title";

const liArr = [
	{
		imgURL: "projects-img1.png",
		imgAlt: "",
		title: "Business Startup",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

export default component$(() => {
	return (
		<section
			id="business"
			class={
				"py-10 px-1 flex flex-col-reverse items-center bg-[--body-bg-light] dark:bg-[--body-bg] text-[--primary-color-light] dark:text-[--primary-color]"
			}
		>
			<div>
				<h3>Our Services</h3>
				<SectionTitle
					capitalize
					title="Save time managing \n your business with"
					bold="our best services"
				/>
			</div>
			<ul>
				{liArr.map((li, index) => {
					return <BusinessCard key={index} {...li} />;
				})}
			</ul>
		</section>
	);
});
