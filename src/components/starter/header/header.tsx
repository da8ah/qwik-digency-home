import { component$ } from "@builder.io/qwik";
import Navbar from "../navbar/navbar";

interface ChildProps {
	mobileMenuState: { isMenuOpen: boolean };
}

export default component$<ChildProps>(
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
