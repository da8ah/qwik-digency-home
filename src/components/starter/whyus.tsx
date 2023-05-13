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
		"w-[90%] h-full p-2 bg-[--primary-color-light] dark:bg-transparent text-white dark:text-[--primary-color-light] ring-2 ring-[--primary-color-light] dark:ring-[--primary-color]";
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
				"py-10 px-1 lg:p-20 flex flex-row justify-center bg-[--body-bg-light] dark:bg-[--body-bg] text-[--primary-color-light] dark:text-[--primary-color] text-center md:text-left"
			}
		>
			<div class={"w-full md:w-[50%] flex flex-col"}>
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
				<ul class={"flex flex-col flex-grow justify-between"}>
					{liArr.map((li, index) => {
						return (
							<Infobox key={index} {...li}>
								{li.icon}
							</Infobox>
						);
					})}
				</ul>
			</div>
			<div class={"hidden md:w-[45%] lg:w-[50%] px-10 md:flex justify-center"}>
				<img src="img/about-us.jpg" alt="A person sitting down reading" />
			</div>
		</section>
	);
});
