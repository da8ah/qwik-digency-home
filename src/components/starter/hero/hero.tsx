import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";

export default component$(() => {
	return (
		<section id="hero" class={["container", styles.wrapper]}>
			<div style={{ width: "50%" }}>
				<h1>
					We're Creating Perfect Digital Products To
					<span class="highlight">Promote Your Brand</span>
				</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<div class={styles["button-group"]}>
					<button
						onClick$={async () => {
							const defaults = {
								spread: 360,
								ticks: 70,
								gravity: 0,
								decay: 0.95,
								startVelocity: 30,
								colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
								origin: {
									x: 0.5,
									y: 0.35,
								},
							};

							function loadConfetti() {
								return new Promise<(opts: any) => void>((resolve, reject) => {
									if ((globalThis as any).confetti) {
										return resolve((globalThis as any).confetti as any);
									}
									const script = document.createElement("script");
									script.src =
										"https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
									script.onload = () =>
										resolve((globalThis as any).confetti as any);
									script.onerror = reject;
									document.head.appendChild(script);
									script.remove();
								});
							}

							const confetti = await loadConfetti();

							function shoot() {
								confetti({
									...defaults,
									particleCount: 80,
									scalar: 1.2,
								});

								confetti({
									...defaults,
									particleCount: 60,
									scalar: 0.75,
								});
							}

							setTimeout(shoot, 0);
							setTimeout(shoot, 100);
							setTimeout(shoot, 200);
							setTimeout(shoot, 300);
							setTimeout(shoot, 400);
						}}
					>
						Time to celebrate
					</button>
					<a
						href="https://qwik.builder.io/docs"
						target="_blank"
						class="button button-dark"
					>
						Explore the docs
					</a>
				</div>
			</div>
			<div style={{ width: "50%" }}>
				<img
					src="img/hero-img.png"
					alt="A graphic image of people and applications"
				/>
			</div>
		</section>
	);
});
