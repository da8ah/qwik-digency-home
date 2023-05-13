import { Slot, component$ } from "@builder.io/qwik";

type BusinessCardProps = {
	title: string;
	description: string;
};
export const BusinessCard = component$<BusinessCardProps>((props) => {
	const { title, description } = props;
	return (
		<li
			class={
				"w-full p-4 min-[450px]:px-20 min-[600px]:w-[40%] min-[600px]:p-4 lg:w-[24%]"
			}
		>
			<div
				class={
					"rounded-sm py-10 flex flex-col justify-center text-center font-bold bg-white shadow-2xl dark:bg-gradient-to-tr dark:from-[#0f123d] dark:via-[#0f123d] dark:to-[#0b2945]"
				}
			>
				<div class={"flex justify-center"}>
					<Slot />
				</div>
				<h3
					class={
						"py-7 text-lg text-[--primary-color-light] dark:text-[--primary-color]"
					}
				>
					{title}
				</h3>
				<p
					class={
						"px-[0.5rem] text-xs text-[--small-text-color-light] dark:text-[--small-text-color] leading-loose"
					}
				>
					{description}
				</p>
			</div>
		</li>
	);
});

type TeamCardProps = {
	imgURL: string;
	imgAlt: string;
	title: string;
	description: string;
};
export const TeamCard = component$<TeamCardProps>((props) => {
	const { imgURL, imgAlt, title, description } = props;
	return (
		<li>
			<div>
				{imgURL + imgAlt}
				{/* <img src={imgURL} alt={imgAlt} /> */}
				<h3>{title}</h3>
				<p>{description}</p>
				<div>
					<img src="" alt="linkedin icon" />
					<img src="" alt="twitter icon" />
				</div>
			</div>
		</li>
	);
});

type BlogCardProps = {
	imgURL: string;
	imgAlt: string;
	title: string;
	description: string;
};
export const BlogCard = component$<BlogCardProps>((props) => {
	const { imgURL, imgAlt, title, description } = props;
	return (
		<li>
			<div>
				<h3>{title}</h3>
				{imgURL + imgAlt}
				{/* <img src={imgURL} alt={imgAlt} /> */}
				<p>{description}</p>
				<div>
					<img src="" alt="go to icon" />
				</div>
			</div>
		</li>
	);
});
