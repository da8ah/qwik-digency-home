import { Slot, component$ } from "@builder.io/qwik";

type InfoboxProps = {
	title: string;
	description: string;
};
export default component$<InfoboxProps>((props) => {
	const { title, description } = props;
	return (
		<li
			class={
				"w-full py-5 flex flex-row justify-start items-start md:items-center text-justify text-[--small-text-color-light] dark:text-[--small-text-color]"
			}
		>
			<div
				class={
					"w-[15%] px-1 min-[480px]:px-2 min-[640px]:px-4 md:px-6 min-[900px]:px-5 lg:px-1"
				}
			>
				<Slot />
			</div>
			<div class={"w-[85%] pr-5 md:pr-2 leading-normal"}>
				<h4 class={"font-bold"}>{title}</h4>
				<p>{description}</p>
			</div>
		</li>
	);
});
