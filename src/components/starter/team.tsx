import { component$ } from "@builder.io/qwik";
import { TeamCard } from "~/components/ui/cards";
import SectionTitle from "~/components/ui/title";

export default component$(() => {
	const liArr = [
		{
			img: (
				<img
					class={"object-contain"}
					src="img/team-01.png"
					alt="team member 1"
				/>
			),
			name: "Courtny Hurry",
			rol: "Product Developer",
		},
		{
			img: (
				<img
					class={"object-contain"}
					src="img/team-02.png"
					alt="team member 2"
				/>
			),
			name: "Lindas Walton",
			rol: "Front-End Developer",
		},
		{
			img: (
				<img
					class={"object-contain"}
					src="img/team-03.png"
					alt="team member 3"
				/>
			),
			name: "Harry Martin",
			rol: "Product Designer",
		},
		{
			img: (
				<img
					class={"object-contain"}
					src="img/team-02.png"
					alt="team member 4"
				/>
			),
			name: "Lisa Cooper",
			rol: "CEO & Senior Employer",
		},
	];
	return (
		<section
			id="team"
			class={
				"py-10 px-1 lg:p-20 flex flex-col justify-center bg-[--body-bg-light] dark:bg-[--body-bg] text-[--primary-color-light] dark:text-[--primary-color]"
			}
		>
			<div class={"w-full text-center"}>
				<h3 class={"text-2xl"}>Our Team</h3>
				<SectionTitle
					class="pt-5 pb-10 text-3xl"
					title={"Meet with"}
					bold={"our team"}
				/>
			</div>
			<ul
				class={
					"flex flex-row flex-wrap lg:flex-nowrap justify-center items-center"
				}
			>
				{liArr.map((li, index) => {
					return (
						<TeamCard key={index} {...li}>
							{li.img}
						</TeamCard>
					);
				})}
			</ul>
		</section>
	);
});
