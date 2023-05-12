import { Slot, component$ } from "@builder.io/qwik";

type ButtonProps = {
	href?: string;
	rounded?: "full" | "md";
	variant: "primary" | "secondary";
	size: "lg" | "md" | "sm";
	class?: string;
	onClick$?: () => {} | Promise<void>;
};

const Button = component$<ButtonProps>((props) => {
	const { size } = props;
	let p = "";
	switch (size) {
		case "lg":
			p = "px-3 py-3";
			break;
		case "md":
			p = "px-3 py-2";
			break;
		case "sm":
			p = "p-1";
			break;
	}
	return (
		<>
			{props.href !== undefined ? (
				<a
					{...props}
					href={props.href}
					class={`${props.class} ${
						"rounded-" + props.rounded || "none"
					} "bg-[--btn-${props.variant}-bg-light] dark:bg-[--btn-${
						props.variant
					}-bg] ${p} active:scale-95 inline-flex items-center justify-center text-sm font-medium transition-color focus:outline-none focus:ring-2 focus-ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900`}
				>
					<Slot />
				</a>
			) : (
				<button
					{...props}
					class={`${props.class} ${
						"rounded-" + props.rounded || "none"
					} "bg-[--btn-${props.variant}-bg-light] dark:bg-[--btn-${
						props.variant
					}-bg] ${p} active:scale-95 inline-flex items-center justify-center text-sm font-medium transition-color focus:outline-none focus:ring-2 focus-ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900`}
					onClick$={props.onClick$ && props.onClick$}
				>
					<Slot />
				</button>
			)}
		</>
	);
});

export default Button;
