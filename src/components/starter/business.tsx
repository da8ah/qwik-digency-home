import { component$ } from "@builder.io/qwik";
import { BusinessCard } from "~/components/ui/cards";
import SectionTitle from "~/components/ui/title";
import {
	RiAppsLine,
	RiCodeSSlashLine,
	RiLandscapeLine,
	RiRocketLine,
} from "~/components/assets/icons";

const liArr = [
	{
		icon: (
			<RiAppsLine class="w-[50px] h-[50px] p-2 bg-[--primary-color-light] dark:bg-transparent text-white dark:text-[--primary-color-light] ring-2 ring-[--primary-color-light] dark:ring-[--primary-color]" />
		),
		title: "App Development",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut et dolore magna aliqua tempor.",
	},
	{
		icon: (
			<RiCodeSSlashLine class="w-[50px] h-[50px] p-2 bg-[--primary-color-light] dark:bg-transparent text-white dark:text-[--primary-color-light] ring-2 ring-[--primary-color-light] dark:ring-[--primary-color]" />
		),
		title: "Web Design",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut et dolore magna aliqua tempor.",
	},
	{
		icon: (
			<RiLandscapeLine class="w-[50px] h-[50px] p-2 bg-[--primary-color-light] dark:bg-transparent text-white dark:text-[--primary-color-light] ring-2 ring-[--primary-color-light] dark:ring-[--primary-color]" />
		),
		title: "Graphics Design",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut et dolore magna aliqua tempor.",
	},
	{
		icon: (
			<RiRocketLine class="w-[50px] h-[50px] p-2 bg-[--primary-color-light] dark:bg-transparent text-white dark:text-[--primary-color-light] ring-2 ring-[--primary-color-light] dark:ring-[--primary-color]" />
		),
		title: "Digital Marketing",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut et dolore magna aliqua tempor.",
	},
];

export default component$(() => {
	return (
		<section
			id="business"
			class={
				"py-10 px-1 lg:p-20 flex flex-col justify-center bg-[--body-bg-light] dark:bg-[--body-bg] text-[--primary-color-light] dark:text-[--primary-color]"
			}
		>
			<div class={"w-full text-center"}>
				<h3 class={"text-2xl"}>Our Services</h3>
				<SectionTitle
					class="pt-5 pb-10 text-3xl"
					capitalize
					title={"Save time managing your business with"}
					bold={"our best services"}
					wrap
				/>
			</div>
			<ul
				class={
					"flex flex-row flex-wrap lg:flex-nowrap justify-center items-center"
				}
			>
				{liArr.map((li, index) => {
					return (
						<BusinessCard key={index} {...li}>
							{li.icon}
						</BusinessCard>
					);
				})}
			</ul>
		</section>
	);
});
