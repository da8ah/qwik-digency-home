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
import { routeLoader$ } from "@builder.io/qwik-city";

import Footer from "~/components/starter/footer/footer";
import Header from "~/components/starter/header/header";

export const useServerTimeLoader = routeLoader$(() => {
	return {
		date: new Date().toISOString(),
	};
});

export const ThemeContext =
	createContextId<Signal<"light" | "dark">>("digency.theme");

export default component$(() => {
	// ThemeContext
	const theme = useSignal("dark");
	useContextProvider(ThemeContext, theme);

	// NavbarOverflow
	const mobileNavbarOverflow = useStore({ isMenuOpen: false }, { deep: false });

	useVisibleTask$(
		({ track }) => {
			track(() => theme.value);
			theme.value === "dark"
				? document.documentElement.classList.add("dark")
				: document.documentElement.classList.remove("dark");
		},
		{ strategy: "document-ready" },
	);

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
