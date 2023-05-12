import { component$ } from "@builder.io/qwik";
import styles from "./stats.module.css";

export default component$(() => {
	return (
		<div class={["container"]}>
			<ul class={[styles.wrapper]}>
				<li>
					<h3>5k+</h3>
					<p>Clients</p>
				</li>
				<li>
					<h3>350+</h3>
					<p>Running Projects</p>
				</li>
				<li>
					<h3>900+</h3>
					<p>Projects Completed</p>
				</li>
			</ul>
		</div>
	);
});
