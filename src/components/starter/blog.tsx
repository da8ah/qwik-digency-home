import { component$ } from "@builder.io/qwik";
import { BlogCard } from "~/components/ui/cards";
import SectionTitle from "~/components/ui/title";

export default component$(() => {
	const liArr = [
		{
			img: (
				<img
					class={"object-cover"}
					src="img/video.png"
					alt="A graphic image of multimedia elements"
				/>
			),
			title: "Video",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mauris eget auctor posuere, enim arcu dictum dolor, quis porta nibh dolor ullamcorper diam.",
		},
		{
			img: (
				<img
					class={"object-cover"}
					src="img/article.png"
					alt="A graphic image of a professional writer"
				/>
			),
			title: "Articles",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mauris eget auctor posuere, enim arcu dictum dolor, quis porta nibh dolor ullamcorper diam.",
		},
		{
			img: (
				<img
					class={"object-cover"}
					src="img/case-study.png"
					alt="A graphic image depicting communication"
				/>
			),
			title: "Case Study",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis, mauris eget auctor posuere, enim arcu dictum dolor, quis porta nibh dolor ullamcorper diam.",
		},
	];
	return (
		<section
			id="blog"
			class={
				"py-10 px-1 lg:p-20 flex flex-col justify-center bg-[--body-bg-light] dark:bg-[--body-bg] text-[--primary-color-light] dark:text-[--primary-color]"
			}
		>
			<div class={"w-full text-center"}>
				<h3 class={"text-2xl"}>Our Blog</h3>
				<SectionTitle
					class="pt-5 pb-10 text-3xl"
					title={"Let's have a look from our"}
					bold={"recent blog"}
				/>
			</div>
			<ul class={"flex flex-row flex-wrap justify-center items-end"}>
				{liArr.map((li, index) => {
					return (
						<BlogCard id={`blog-li-${index}`} key={index} {...li}>
							{li.img}
						</BlogCard>
					);
				})}
			</ul>
		</section>
	);
});
