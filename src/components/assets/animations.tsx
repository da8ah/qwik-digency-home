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
		script.onload = () => resolve((globalThis as any).confetti as any);
		script.onerror = reject;
		document.head.appendChild(script);
		script.remove();
	});
}

export async function shootConfetti() {
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
}

export function slideUpdater() {
	const container = document.getElementById("carousel");
	const indexes = [0, 1, 2];
	let counter = 0;
	setInterval(async () => {
		container!.scrollTo({ left: container!.offsetWidth, behavior: "smooth" });
		await new Promise((resolve) => setTimeout(resolve, 1000));
		for (let i = 0; i < indexes.length; i++) {
			const index = (counter + i) % indexes.length;
			document!.getElementById(
				`slider-div-${index}`,
			)!.style.transform = `translateX(${100 * i}%)`;
		}

		if (counter > 2) {
			counter = 0; // counter reset
		}
		counter++;
	}, 3000);
}
