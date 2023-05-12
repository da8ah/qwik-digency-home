import { component$ } from "@builder.io/qwik";

export default component$(() => {
	const stats = [
		{
			cant: "5k+",
			title: "Clients",
		},
		{
			cant: "350+",
			title: "Running Projects",
		},
		{
			cant: "950+",
			title: "Projects Completed",
		},
	];
	return (
		<section
			id="stats"
			class={
				"relative z-[-1] py-10 px-1 flex flex-row justify-around items-start md:items-center text-center bg-[--primary-color-light] dark:bg-[--body-bg]"
			}
		>
			{stats.map((stat, index) => {
				return (
					<div
						key={index}
						class={
							"w-[30%] md:w-[20%] font-semibold dark:font-extrabold text-white drop-shadow-lg dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-[#02bba6] dark:via-[#1d81b0] dark:to-[#235dad]"
						}
					>
						<h4 class={"text-lg md:text-4xl"}>{stat.cant}</h4>
						<p class={"text-sm md:text-lg capitalize"}>{stat.title}</p>
					</div>
				);
			})}
		</section>
	);
});
