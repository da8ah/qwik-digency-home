import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<section
			id="hero"
			class={
				"py-10 px-1 flex flex-col-reverse items-center bg-[--body-bg-light] dark:bg-[--body-bg] text-[--primary-color-light] dark:text-[--primary-color]"
			}
		>
			<div class={""}>
				<h1
					class={
						"text-3xl font-extrabold text-[--heading-color-light] dark:text-[--heading-color]"
					}
				>
					We're Creating Perfect <br />
					Digital Products To <br />
					<span
						class={"text-[--primary-color-light] dark:text-[--primary-color]"}
					>
						Promote Your Brand
					</span>
				</h1>
				<p
					class={
						"py-10 text-xl text-[--small-text-color-light] dark:text-[--small-text-color]"
					}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<div
					class={
						"flex flex-row justify-around font-bold text-[--small-text-color-light] dark:text-[--small-text-color]"
					}
				>
					<button
						class={
							"rounded-full p-3 bg-[--btn-secondary-bg-light] dark:bg-[--btn-secondary-bg]"
						}
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
						Get Started Now
					</button>
					<a class="rounded-full p-3 bg-[--btn-primary-bg-light] dark:bg-[--btn-primary-bg]">
						Explore the docs
					</a>
				</div>
			</div>
			<div class={"w-[90%]"}>
				<img
					src="img/hero-img.png"
					alt="A graphic image of people and applications"
				/>
			</div>
		</section>
	);
});
