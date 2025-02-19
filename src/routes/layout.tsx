import type { Signal } from "@builder.io/qwik";
import {
	Slot,
	component$,
	createContextId,
	useContextProvider,
	useSignal,
	useStore,
	useVisibleTask$,
} from "@builder.io/qwik";

import Footer from "~/components/starter/footer";
import Header from "~/components/starter/header";

export const ThemeContext =
	createContextId<Signal<"dark" | "light">>("digency.theme");

export default component$(() => {
	// ThemeContext
	const theme = useSignal<"dark" | "light">("dark");
	useContextProvider(ThemeContext, theme);
	useVisibleTask$(
		({ track }) => {
			track(() => theme.value);
			theme.value === "dark"
				? document.documentElement.classList.add("dark")
				: document.documentElement.classList.remove("dark");
		},
		{ strategy: "document-ready" },
	);

	// NavbarOverflow
	const mobileNavbarOverflow = useStore({ isMenuOpen: false }, { deep: false });

	return (
		<>
			<Header mobileMenuState={mobileNavbarOverflow} />
			<main>
				<Slot />
			</main>
			<Footer />
		</>
	);
});
