import { component$ } from "@builder.io/qwik";

type SectionTitleProps = {
	class?: string;
	capitalize?: boolean;
	title: string;
	bold: string;
	opt?: string;
	wrap?: boolean;
};

const SectionTitle = component$<SectionTitleProps>((props) => {
	const { capitalize, title, bold, opt, wrap } = props;
	return (
		<h2
			class={`${props.class} ${
				capitalize ? "capitalize" : ""
			} font-extrabold text-[--heading-color-light] dark:text-[--heading-color]`}
		>
			{title + " "}
			<span class={"text-[--primary-color-light] dark:text-[--primary-color]"}>
				<br class={wrap ? "block" : "hidden"} />
				{bold}
			</span>
			{" " + opt}
		</h2>
	);
});

export default SectionTitle;
