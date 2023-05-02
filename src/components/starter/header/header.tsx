import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {
	return (
		<header class={styles.header}>
			<nav class={["container", styles.wrapper]}>
				<div class={styles.logo}>
					<a href="/" title="logo">
						<h2>Digency</h2>
					</a>
				</div>
				<ul>
					<li>
						<a
							href="https://qwik.builder.io/docs/components/overview/"
							target="_blank"
						>
							Docs
						</a>
					</li>
					<li>
						<a
							href="https://qwik.builder.io/examples/introduction/hello-world/"
							target="_blank"
						>
							Examples
						</a>
					</li>
					<li>
						<a
							href="https://qwik.builder.io/tutorial/welcome/overview/"
							target="_blank"
						>
							Tutorials
						</a>
					</li>
				</ul>
				<div>Light</div>
			</nav>
		</header>
	);
});
