import { component$ } from "@builder.io/qwik";
import Infobox from "~/components/ui/infobox";
import SectionTitle from "~/components/ui/title";
import {
	RiCustomerService2Line,
	RiTeamLine,
	RiWifiLine,
} from "~/components/assets/icons";

export default component$(() => {
	const classIcons =
		"rounded-full md:rounded-none w-[90%] h-full p-2 bg-[--primary-color-light] dark:bg-transparent text-white dark:text-[--primary-color-light] ring-2 ring-[--primary-color-light] dark:ring-[--primary-color]";
	const liArr = [
		{
			icon: <RiWifiLine class={classIcons} />,
			title: "First working process",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate tincidunt semper. Ut ex ipsum, vestibulum id nibh et.",
		},
		{
			icon: <RiTeamLine class={classIcons} />,
			title: "Dedicated team",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate tincidunt semper. Ut ex ipsum, vestibulum id nibh et.",
		},
		{
			icon: <RiCustomerService2Line class={classIcons} />,
			title: "24/7 Hours support",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate tincidunt semper. Ut ex ipsum, vestibulum id nibh et.",
		},
	];
	return (
		<section
			id="whyus"
			class={
				"py-10 px-1 lg:p-20 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-0 flex flex-col justify-center bg-[--body-bg-light] dark:bg-[--body-bg] text-[--primary-color-light] dark:text-[--primary-color] text-center md:text-left"
			}
		>
			<div
				class={
					"w-full px-1 md:px-10 lg:px-0 flex flex-col justify-center md:col-span-1 md:row-span-2"
				}
			>
				<h3 class={"text-2xl"}>Why choose us</h3>
				<SectionTitle
					class="pt-5 text-3xl"
					capitalize
					title="Specialist in aviding clients on"
					bold="financial challenges"
					wrap
				/>
				<p
					class={
						"md:pr-10 py-10 text-[--small-text-color-light] dark:text-[--small-text-color] leading-loose"
					}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Id semper
					risus in hendrerit gravida rutrum quisque. Integer eget aliquet nibh
					praesent tristique magna sit amet purus.
				</p>
			</div>
			<div
				class={
					"hidden px-10 md:row-span-2 lg:row-span-3 md:flex md:flex-col md:justify-center md:items-center"
				}
			>
				<img
					class={"min-[850px]:h-[80%] lg:h-auto shadow-lg bg-blend-overlay"}
					src="img/about-us.jpg"
					alt="A person sitting down reading"
				/>
			</div>
			<ul
				class={
					"md:row-span-1 md:col-span-2 lg:col-span-1 flex flex-col justify-between md:justify-center lg:justify-between"
				}
			>
				{liArr.map((li, index) => {
					return (
						<Infobox key={index} {...li}>
							{li.icon}
						</Infobox>
					);
				})}
			</ul>
		</section>
	);
});
