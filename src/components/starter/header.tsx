import { component$ } from "@builder.io/qwik";
import Navbar from "~/components/starter/navbar";

interface NavbarProps {
	mobileMenuState: { isMenuOpen: boolean };
}

export default component$<NavbarProps>(
	({ mobileMenuState: mobileMenuState }) => {
		return (
			<header
				class={
					"bg-[--body-bg-light] dark:bg-[--body-bg] relative h-20 font-extrabold md:font-normal"
				}
			>
				<Navbar mobileMenuState={mobileMenuState} />
			</header>
		);
	},
);
