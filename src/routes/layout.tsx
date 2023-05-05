import { component$, Slot, useStore, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Footer from "~/components/starter/footer/footer";
import Header from "~/components/starter/header/header";

import styles from "./styles.css?inline";

export const useServerTimeLoader = routeLoader$(() => {
	return {
		date: new Date().toISOString(),
	};
});

export default component$(() => {
	const mobileNavbarOverflow = useStore({ isMenuOpen: false }, { deep: false });

	useStyles$(styles);
	return (
		<>
			<Header menuState={mobileNavbarOverflow} />
			<main
				class={
					mobileNavbarOverflow.isMenuOpen ? "overflow-hidden" : "overflow-auto"
				}
			>
				<Slot />
			</main>
			<Footer />
		</>
	);
});
