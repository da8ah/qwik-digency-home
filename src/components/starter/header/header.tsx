import { component$ } from "@builder.io/qwik";
import Navbar from "../navbar/navbar";
import styles from "./header.module.css";

interface ChildProps {
	menuState: { isMenuOpen: boolean };
}

export default component$<ChildProps>(({ menuState }) => {
	return (
		<header class={styles.header}>
			<Navbar menuState={menuState} />
		</header>
	);
});
