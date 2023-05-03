import { component$ } from "@builder.io/qwik";
import Navbar from "../navbar/navbar";
import styles from "./header.module.css";

export default component$(() => {
	return (
		<header class={styles.header}>
			<Navbar />
		</header>
	);
});
