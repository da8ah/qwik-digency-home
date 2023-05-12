import { component$ } from "@builder.io/qwik";

type SectionTitleProps = {
	capitalize?: boolean;
	title: string;
	bold: string;
};

const SectionTitle = component$<SectionTitleProps>((props) => {
	const { title, bold, capitalize } = props;
	return (
		<h2
			class={`${
				capitalize ? "capitalize" : ""
			} text-lg font-extrabold text-[--heading-color-light] dark:text-[--heading-color]`}
		>
			{title + " "}
			<span class={"text-[--primary-color-light] dark:text-[--primary-color]"}>
				{bold}
			</span>
		</h2>
	);
});

export default SectionTitle;
