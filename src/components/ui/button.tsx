import { Slot, component$ } from "@builder.io/qwik";

type ButtonProps = {
	href?: string;
	rounded?: "full" | "md";
	variant: "primary" | "secondary";
	class?: string;
	onClick$?: () => {} | Promise<void>;
};

const Button = component$<ButtonProps>((props) => {
	return (
		<>
			{props.href !== undefined ? (
				<a
					{...props}
					href={props.href}
					class={`${props.class} ${"rounded-" + props.rounded || "none"} ${
						props.variant === "primary"
							? "bg-[--btn-primary-bg-light] dark:bg-[--btn-primary-bg]"
							: "bg-[--btn-secondary-bg-light] dark:bg-[--btn-secondary-bg]"
					} p-3 active:scale-95 inline-flex items-center justify-center text-sm font-medium transition-color focus:outline-none focus:ring-2 focus-ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900`}
				>
					<Slot />
				</a>
			) : (
				<button
					{...props}
					class={`${props.class} ${props.rounded || "rounded-none"} ${
						props.variant === "primary"
							? "bg-[--btn-primary-bg-light] dark:bg-[--btn-primary-bg]"
							: "bg-[--btn-secondary-bg-light] dark:bg-[--btn-secondary-bg]"
					} p-3 active:scale-95 inline-flex items-center justify-center text-sm font-medium transition-color focus:outline-none focus:ring-2 focus-ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900`}
					onClick$={props.onClick$ && props.onClick$}
				>
					<Slot />
				</button>
			)}
		</>
	);
});

export default Button;
