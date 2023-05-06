import { component$ } from "@builder.io/qwik";
import Navbar from "../navbar/navbar";

interface ChildProps {
	mobileMenuState: { isMenuOpen: boolean };
}

export default component$<ChildProps>(
	({ mobileMenuState: mobileMenuState }) => {
		return (
			<header class={"h-[20vh]"}>
				<Navbar mobileMenuState={mobileMenuState} />
			</header>
		);
	},
);
