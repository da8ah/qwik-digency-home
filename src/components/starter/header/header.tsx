import { component$ } from "@builder.io/qwik";
import Navbar from "../navbar/navbar";

interface ChildProps {
	mobileMenuState: { isMenuOpen: boolean };
}

export default component$<ChildProps>(
	({ mobileMenuState: mobileMenuState }) => {
		return (
			<header class={"relative bg-transparent text-black dark:text-white"}>
				<Navbar mobileMenuState={mobileMenuState} />
			</header>
		);
	},
);
