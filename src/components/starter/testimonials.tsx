import { component$ } from "@builder.io/qwik";
import { BlogCard } from "~/components/ui/cards";
import SectionTitle from "~/components/ui/title";

export default component$(() => {
	const liArr = [
		{
			img: <br />,
			title: "Video",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mauris eget auctor posuere, enim arcu dictum dolor, quis porta nibh dolor ullamcorper diam.",
		},
		{
			img: <br />,
			title: "Articles",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mauris eget auctor posuere, enim arcu dictum dolor, quis porta nibh dolor ullamcorper diam.",
		},
		{
			img: <br />,
			title: "Case Study",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mauris eget auctor posuere, enim arcu dictum dolor, quis porta nibh dolor ullamcorper diam.",
		},
	];
	return (
		<section
			id="testimonials"
			class={
				"py-10 px-1 lg:p-20 flex flex-col justify-center bg-[--body-bg-light] dark:bg-[--body-bg] text-[--primary-color-light] dark:text-[--primary-color]"
			}
		>
			<div class={"w-full text-center"}>
				<h3 class={"text-2xl"}>Testimonials</h3>
				<SectionTitle
					class="pt-5 pb-10 text-3xl"
					title={"Trusted by more than"}
					bold={"5,000 customers"}
				/>
			</div>
			<ul class={"flex flex-row justify-center items-center"}>
				{liArr.map((li, index) => {
					return (
						<BlogCard key={index} {...li}>
							{li.img}
						</BlogCard>
					);
				})}
			</ul>
		</section>
	);
});
