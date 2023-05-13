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
				"w-full flex flex-row justify-start items-center text-justify text-[--small-text-color-light] dark:text-[--small-text-color]"
			}
		>
			<div class={"w-[15%] px-1"}>
				<Slot />
			</div>
			<div class={"w-[85%] pr-2 leading-normal"}>
				<h4 class={"font-bold"}>{title}</h4>
				<p>{description}</p>
			</div>
		</li>
	);
});
