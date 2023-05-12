import { Slot, component$ } from "@builder.io/qwik";

type ButtonProps = {
	href?: string;
	rounded?: "full" | "md";
	secondary?: boolean;
	size: "lg" | "md" | "sm";
	class?: string;
	onClick$?: () => {} | Promise<void>;
};

const Button = component$<ButtonProps>((props) => {
	const { size, rounded } = props;
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
	let r = "";
	switch (rounded) {
		case "full":
			r = "rounded-full";
			break;
		case "md":
			r = "rounded-xl";
			break;
	}
	return (
		<>
			{props.href !== undefined ? (
				<a
					{...props}
					href={props.href}
					class={`${props.class || ""} ${r} ${
						!props.secondary
							? "uppercase md:capitalize font-bold text-white bg-[--btn-primary-bg-light] dark:bg-[--btn-primary-bg]"
							: "bg-[--btn-secondary-bg-light] dark:bg-[--btn-secondary-bg] ring-1 ring-slate-400 dark:ring-slate-400"
					} ${p} text-center active:scale-95 inline-flex items-center justify-center text-sm transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900`}
				>
					<Slot />
				</a>
			) : (
				<button
					{...props}
					class={`${props.class || ""} ${r} ${
						!props.secondary
							? "uppercase md:capitalize font-bold text-white bg-[--btn-primary-bg-light] dark:bg-[--btn-primary-bg]"
							: "bg-[--btn-secondary-bg-light] dark:bg-[--btn-secondary-bg] ring-1 ring-slate-400 dark:ring-slate-400"
					} ${p} text-center active:scale-95 inline-flex items-center justify-center text-sm transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900`}
					onClick$={props.onClick$ && props.onClick$}
				>
					<Slot />
				</button>
			)}
		</>
	);
});

export default Button;
